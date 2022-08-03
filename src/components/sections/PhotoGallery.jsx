import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Masonry from 'react-masonry-css';

const photoAlbum = ([
  { id: 1,
    src: '../../assets/images/inside-candles-1.png',
    alt: 'inside La Tiendita, candle shelf'
  },
  { id: 2,
    src: '../../assets/images/inside-back-2.png',
    alt: 'inside La Tiendita, cowboy hats'
  },
  { id: 3,
    src: '../../assets/images/inside-checkout-2.png',
    alt: 'inside La Tiendita, checkout stand with snacks'
  },
  { id: 4,
    src: '../../assets/images/inside-checkout-3.png',
    alt: 'inside La Tiendita, checkout stand with snacks'
  },
  { id: 5,
    src: '../../assets/images/inside-shelf-2.png',
    alt: 'inside La Tiendita, full store view of shelves containing various products'
  },
  { id: 6,
    src: '../../assets/images/inside-snacks-1.png',
    alt: 'inside La Tiendita, chips and snacks shelf'
  },
  { id: 7,
    src: '../../assets/images/inside-snacks-3.png',
    alt: 'inside La Tiendita, candy and sweets shelf'
  },
  { id: 8,
    src: '../../assets/images/inside-wall-3.png',
    alt: `inside La Tiendita, produce cooler, pottery
    and handmade goods`
  },
  { id: 9,
    src: '../../assets/images/inside-wall-1.png',
    alt: `inside La Tiendita, bagged candy, beef jerk, 
    and other snacks.`
  },
]);

/* Need to Edit Breakpoints Later */
const breakpoints = {
  default: 3,
  1023: 2, 
  640: 2,
  400: 1,
};

const PhotoGallery = () => {
  return (
    <section id='Photos'
             className='flex
                        flex-col
                        items-center
                      bg-emerald-800
                        py-14
                       '>

      <h2 className='font-bold
                   text-zinc-50
                     text-4xl
                     pt-0
                     pb-14
                    '>
         Look Around.
      </h2>
      <div className='w-10/12
                      rounded-2xl
                    bg-zinc-50
                    shadow-gray-700
                    hover:shadow-gray-800
                      shadow-lg
                      hover:shadow-2xl
                      p-8
                     '>
        <Masonry
          breakpointCols={breakpoints}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column">
          <div className="card shadow-2xl">
            <figure>
              <StaticImage 
                  src='../../assets/images/inside-candles-1.png'
                  alt='inside La Tiendita, shelf full of candles and snacks'
                  objectFit='cover'
                  placeholder='blurred'
                  loading='lazy'
                  as='article'
              />
            </figure>
          </div>
          <div className="card shadow-2xl">
            <figure>
              <StaticImage 
                  src='../../assets/images/inside-back-2.png'
                  alt='inside La Tiendita, back isle full of authentic decorative mexicano latino cowboy hats'
                  objectFit='cover'
                  placeholder='blurred'
                  loading='lazy'
                  as='article'
              />
            </figure>
          </div>
          <div className="card shadow-2xl">
            <figure>
              <StaticImage 
                  src='../../assets/images/inside-checkout-2.png'
                  alt='inside La Tiendita, front checkout counter with authentic mexicano and latino hand soaps, creams, and gels'
                  objectFit='cover'
                  placeholder='blurred'
                  loading='lazy'
                  as='article'
              />
            </figure>
          </div>
          <div className="card shadow-2xl">
            <figure>
              <StaticImage 
                  src='../../assets/images/inside-checkout-3.png'
                  alt='inside La Tiendita, beside front checkout counter. Snack tower full of authentic mexicano latino chicharones and other spicy chips and snacks.'
                  objectFit='cover'
                  placeholder='blurred'
                  loading='lazy'
                  as='article'
              />
            </figure>
          </div>
          <div className="card shadow-2xl">
            <figure>
              <StaticImage 
                  src='../../assets/images/inside-shelf-2.png'
                  alt='inside La Tiendita, middle aisle full of authentic mexicano and latino breads, beans, rice, cookies, and other snacks.'
                  objectFit='cover'
                  placeholder='blurred'
                  loading='lazy'
                  as='article'
              />
            </figure>
          </div>
          <div className="card shadow-2xl">
            <figure>
              <StaticImage 
                  src='../../assets/images/inside-snacks-1.png'
                  alt='inside La Tiendita, middle aisle full of authentic mexicano latino candies, chips, cookies, and other snacks.'
                  objectFit='cover'
                  placeholder='blurred'
                  loading='lazy'
                  as='article'
              />
            </figure>
          </div>
          <div className="card shadow-2xl">
            <figure>
              <StaticImage 
                  src='../../assets/images/inside-snacks-3.png'
                  alt='inside La Tiendita, front aisle full of authentic mexicano latino  spciy candies, hips, sweet cookies, and other authentic snacks.'
                  objectFit='cover'
                  placeholder='blurred'
                  loading='lazy'
                  as='article'
              />
            </figure>
          </div>
          <div className="card shadow-2xl">
            <figure>
              <StaticImage 
                  src='../../assets/images/inside-wall-3.png'
                  alt='inside La Tiendita, right wall full of authentic handmade mexicano latino pottery. Placed next to a small container full of cheese and other vegetables.'
                  objectFit='cover'
                  placeholder='blurred'
                  loading='lazy'
                  as='article'
              />
            </figure>
          </div>
          <div className="card shadow-2xl">
            <figure>
              <StaticImage 
                  src='../../assets/images/inside-wall-1.png'
                  alt='inside La Tiendita, right wall full of bagged candies, spices, various nuts, gummy bears, and other mexicano latino snacks.'
                  objectFit='cover'
                  placeholder='blurred'
                  loading='lazy'
                  as='article'
              />
            </figure>
          </div>
        </Masonry>  
      </div>
    </section>
  );
}

export default PhotoGallery;