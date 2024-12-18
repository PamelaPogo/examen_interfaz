import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  images: any[] = [];
  galleriaImages: any[] = [];
  responsiveOptions: any[] = [];
  
  data = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Ventas',
        data: [65, 59, 80, 81, 56],
        fill: false,
        borderColor: '#42A5F5',
        tension: 0.1
      }
    ]
  };

  constructor() {
    // Imágenes para el carrusel
    this.images = [
      { src: 'https://i.ytimg.com/vi/0UwhQ1bFsYg/maxresdefault.jpg', alt: 'Imagen 1', title: '' },
      { src: 'https://i.ytimg.com/vi/T6QUBlHIgS8/mqdefault.jpg', alt: 'Imagen 2', title: '' },
      { src: 'https://i.ytimg.com/vi/106qKL3IExQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDowUpImaPh2MGmOdHitNPVKGRg3g', alt: 'Imagen 3', title: '' },
      { src: 'https://i.ytimg.com/vi/H0ULjPRYNPc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCqwCV7DGXlz3Fli9Eesx-BMdThKQ', alt: 'Imagen 4', title: '' },
    ];

    // Imágenes para la galería
    this.galleriaImages = [
      {
        itemImageSrc: 'https://i.ytimg.com/vi/4mdmuwpWWKo/maxresdefault.jpg',
        thumbnailImageSrc: 'https://i.ytimg.com/vi/gntQsbr_lmk/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDG-B4N3rJxfFoJwMT_cwD-9wLczw',
        alt: 'Imagen 1',
        title: 'Título 1'
      },
      {
        itemImageSrc: 'https://i.ytimg.com/vi/3NZr-KXKlwk/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB_BqPG0McqsXg4xm5rRtiflyCzPQ',
        thumbnailImageSrc: 'https://www.okchicas.com/wp-content/uploads/2020/12/outfits-winter-kids.jpg',
        alt: 'Imagen 2',
        title: 'Título 2'
      },
      {
        itemImageSrc: 'https://cdn.palbincdn.com/users/5928/images/vestidos-nina-otono-invierno-2024-1720547460.jpg',
        thumbnailImageSrc: 'https://i.ytimg.com/vi/v0rgJJWgKsI/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCPHMMag0AoT5GlYBld6bkYAJHqhg',
        alt: 'Imagen 3',
        title: 'Título 3'
      },
      {
        itemImageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0gyuPhumabGvAkMkUZMJXqqChdU38YmgseQGy9pn5dCOVFyFcvtcXWdzzmv7YasSUdmA&usqp=CAU',
        thumbnailImageSrc: 'https://i0.wp.com/www.5lobinos.com/wp-content/uploads/2024/02/vestido-nina-discobolo-basmarti-primavera-verano-2024.jpg?fit=1000%2C1000&ssl=1',
        alt: 'Imagen 4',
        title: 'Título 4'
      }
    ];

    // Opciones responsivas para la galería
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1
      }
    ];

    
  }
}
