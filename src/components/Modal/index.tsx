import React from 'react';
import { Link } from 'react-router-dom';

import { PropsMovies } from '../../pages/Home';
import { Image } from '../../components/Image';

import './style.css';

interface PropsModal{
  children: any;
  content: PropsMovies[];
  className: string;
}

export const Modal = ({children, content, className}: PropsModal) => {
  return (
    <div className={className}>
      <div className="modal__content">
        <div className="modal__content-icon">
          {children}
        </div>

        {content.map(({director, episode_id, opening_crawl, producer, release_date, title, url }: PropsMovies) => (
          <div className="modal__content-item" key={title}>
            <Image 
              url="https://via.placeholder.com/500x300/CCCCCC/FFFFFF?text=?" 
              title="Image Movie"
              sizeImage="40%"
            />

            <div className="modal__content-item-description">
              <h1>{title}</h1>

              <p>{opening_crawl}</p>
              <p><strong>Episódio:</strong> {episode_id}</p>
              <p><strong>Produção:</strong> {producer}</p>
              <p><strong>Diretor:</strong> {director}</p>
              <p><strong>Data de lançamento:</strong> {release_date}</p>
              <p><strong>Url de acesso:</strong> <Link to="#">{url}</Link></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
