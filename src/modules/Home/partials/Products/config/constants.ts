import pc1 from '../../../../../assets/Desktop/pc1.jpg';
import pc2 from '../../../../../assets/Desktop/pc2.jpg';
import drone1 from '../../../../../assets/drone/drone1.webp';
import drone2 from '../../../../../assets/drone/drone2.webp';
import monitor1 from '../../../../../assets/monitor/monitor 1.webp';
import monitor2 from '../../../../../assets/monitor/monitor2.webp';
import watch2 from '../../../../../assets/Watch/watch.2jpg.webp';
import router1 from '../../../../../assets/Router/router1.webp';
import router2 from '../../../../../assets/Router/router2.webp';
import tablet1 from '../../../../../assets/Tablet/tablet1.webp';
import tablet2 from '../../../../../assets/Tablet/tablet2.webp';
import earbud2 from '../../../../../assets/earbuds/earbud2.jpg';
import earbud3 from '../../../../../assets/earbuds/earbud3.jpg';
import graphic1 from '../../../../../assets/Graphics Card/graphicCard1.jpg';
import graphic2 from '../../../../../assets/Graphics Card/graphicCard2.jpg';

export const products = [
  {
    id: 1,
    productCode: 'pc-001',
    name: 'Full Desktop Setup',
    brand: 'MSI',
    status: 'In Stock',
    category: 'Gaming PC',
    image: pc1,
    hoverImage: pc2,
    rating: 4,
    price: 420999,
    regularPrice: 460876,
    features: [
      'Intel 12th Gen Core i5-12400 Alder Lake Processor',
      'MSI PRO H610M-S DDR4 m-ATX Motherboard',
      'Team T-Force VULCAN Z Red 8GB DDR4 3200MHz RAM',
    ],
  },
  {
    id: 2,
    productCode: 'pc-002',
    name: 'DJ1 Dual Battery Folding Camera Toy Drone',
    brand: 'DJ1',
    status: 'In Stock',
    category: 'Gadget',
    image: drone2,
    hoverImage: drone1,
    rating: 5,
    price: 5900,
    regularPrice: 460876,
    features: [
      'Dual battery design',
      'Folding camera toy drone',
      'Easy-to-control flight system',
    ],
  },
  {
    id: 3,
    productCode: 'pc-003',
    name: 'MSI G274F 27" 180Hz IPS FHD Gaming Monitor',
    category: 'Monitor',
    status: 'In Stock',
    image: monitor1,
    hoverImage: monitor2,
    rating: 4,
    price: 25800,
    oldPrice: 26900,
    regularPrice: 60876,
    features: [
      '27" FHD 180Hz IPS Display',
      '1ms response time',
      'NVIDIA G-Sync support',
    ],
  },
  {
    id: 4,
    productCode: 'pc-004',
    name: 'COLMI P76 Smart Watch',
    category: 'Gadget',
    status: 'Out Of Stock',
    image: watch2,
    hoverImage: watch2,
    rating: 4,
    price: 1790,
    oldPrice: 2199,
    regularPrice: 4676,
    features: ['Heart rate monitoring', 'Sleep tracking', 'Multi-sport modes'],
  },
  {
    id: 5,
    productCode: 'pc-005',
    name: 'TP-Link XC220-G3 AC1200 Wireless XPON Router',
    Brand: 'Tp-Link',
    status: 'In Stock',
    category: 'Networking',
    image: router1,
    hoverImage: router2,
    rating: 5,
    price: 3500,
    regularPrice: 4676,
    features: [
      'AC1200 dual-band wireless speed',
      'Supports XPON technology',
      'Easy setup and management',
    ],
  },
  {
    id: 6,
    productCode: 'pc-006',
    name: 'Apple iPad Air 11-inch (MUWK3LL/A, MUWK3ZP/A)',
    Brand: 'Apple',
    status: 'Out of Stock',
    category: 'Tablet',
    image: tablet1,
    hoverImage: tablet2,
    rating: 5,
    price: 92500,
    oldPrice: 97900,
    regularPrice: 103876,
    features: [
      '11-inch Liquid Retina display',
      'A14 Bionic chip',
      'Touch ID for secure authentication',
    ],
  },
  {
    id: 7,
    productCode: 'pc-007',
    name: 'Black Shark Lucifer T7 TWS Earbuds',
    Brand: 'Black Shark',
    status: 'In Stock',
    category: 'Gadget',
    image: earbud2,
    hoverImage: earbud3,
    rating: 5,
    price: 1999,
    oldPrice: 2800,
    regularPrice: 46876,
    features: [
      'Bluetooth 5.2 connectivity',
      'Active noise cancellation',
      'In-ear design for comfort',
    ],
  },
  {
    id: 8,
    productCode: 'pc-008',
    name: 'Colorful GeForce GT1030 V3 2GB Graphics Card',
    Brand: 'Colorful',
    status: 'In Stock',
    category: 'Component',
    image: graphic1,
    hoverImage: graphic2,
    rating: 5,
    price: 1999,
    oldPrice: 2800,
    regularPrice: 356876,
    features: [
      '2GB GDDR5 memory',
      'Low-profile design',
      'Supports 4K video output',
    ],
  },
];
