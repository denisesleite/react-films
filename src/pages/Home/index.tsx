import React, { ChangeEvent, useEffect, useState } from 'react';

import banner from '../../assets/img/banner.png';

import { FiX, FiSearch, FiPlusCircle } from 'react-icons/fi';
import api from '../../service/api';

import { Input } from '../../components/Input';
import { Image } from '../../components/Image';
import { Modal } from '../../components/Modal';

import './style.css';

export interface PropsMovies{
  // characters: [];
  director: string;
  episode_id: number;
  opening_crawl: string;
  // planets: [];
  producer: string;
  release_date: string;
  // species: [];
  // starships: [];
  title: string;
  url: string;
  // vehicles: [];
}

export const Home = ({director, episode_id, opening_crawl, producer, release_date, title, url}: PropsMovies) => {
  const [movies, setMovies] = useState<PropsMovies[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<PropsMovies[]>([]);
  const [filter, setFilter] = useState([]);
  const [value, setValue] = useState('');
  const [modal, setModal] = useState(false);

  useEffect(() => {
    api.get("/films/").then(response => {
      setMovies(response.data.results);
      setFilter(response.data.results);
      console.log(response.data);
    });
  }, []);

  const handleOpenDescriptionMovies = (movie: PropsMovies) => {
    const selected = {
      director: movie.director,
      episode_id: movie.episode_id,
      opening_crawl: movie.opening_crawl,
      producer: movie.producer,
      release_date: movie.release_date,
      title: movie.title,
      url: movie.url
    }
    setSelectedMovie([selected]);
    setModal(true);
  }

  const handleFilter = (e: ChangeEvent<HTMLInputElement>) => {
    let search = e.target.value.toLowerCase();

    const newMovies = filter.filter((movie: PropsMovies) => movie.title.toLowerCase().includes(search));
    
    setValue(search)
    setMovies(newMovies);
  }

  return (
    <div className="list__films">
      <header className="list__films-header">
        <Image url={banner} title="Banner" sizeImage="32%">
          <div className="list__films-header-content">
            <h1>SWAPI</h1>
            
            <Input 
              type="text" 
              id="search" 
              name="search"
              value={value} 
              handleChange={handleFilter}
              label="Pesquisa"
              idLabel="searchLabel"
            >
              <FiSearch color="#fff"/>
            </Input>
          </div>
        </Image>
      </header>

      <main>
        <div className="list__films-box">
          {movies.map((movie: PropsMovies) => (
            <div className="list__films-item" key={movie.title} onClick={() => handleOpenDescriptionMovies(movie)}>
              <Image 
                url="https://via.placeholder.com/200x150/1d1d20/FFFFFF?text=?" 
                title="Image Movie"
                sizeImage="140px"
              />
              <div className="list__films-item-description" key={title}>
                <h3>{movie.title}</h3>
                <p>{movie.opening_crawl.length > 30 ? movie.opening_crawl.substr(0, 120) + '...' : movie.opening_crawl}</p>
                <span>
                  <strong>Diretor: </strong>
                  {movie.director}
                </span>

                <div>
                  <p>Clique para mais detalhes</p>
                  
                  <FiPlusCircle color="#f5b103" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Modal content={selectedMovie} className={modal ? 'modal active' : 'modal'}>
        <FiX 
          size={30} 
          onClick={() => setModal(false)} 
          cursor="pointer"
          color="#363636"
        />
      </Modal>

    </div>
  )
}
