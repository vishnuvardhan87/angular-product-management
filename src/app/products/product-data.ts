import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Product } from './product';

export class ProductData implements InMemoryDbService {

  createDb() {
    const products: Product[] = [
      {
        "id": 1,
        "productName": "Leaf Rake",
        "category":"Household Items",
        "description": "Leaf rake with 48-inch wooden handle.",
        "price": 19.95,
        "starRating": 3.2,
        "imageUrl": "https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
      },
      {
        "id": 2,
        "productName": "Garden Cart",
        "category":"Garden Items",
        "description": "15 gallon capacity rolling garden cart",
        "price": 32.99,
        "starRating": 4.2,
        "imageUrl": "https://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
      },
      {
        "id": 5,
        "productName": "Hammer",
        "category":"Household Items",
        "description": "Curved claw steel hammer",
        "price": 8.9,
        "starRating": 4.8,
        "imageUrl": "https://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
      },
      {
        "id": 8,
        "productName": "Saw",
        "category":"Repair Items",
        "description": "15-inch steel blade hand saw",
        "price": 11.55,
        "starRating": 3.7,
        "imageUrl": "https://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png"
      },
      {
        "id": 10,
        "productName": "Video Game Controller",
        "category":"Household Items",
        "description": "Standard two-button video game controller",
        "price": 35.95,
        "starRating": 4.6,
        "imageUrl": "https://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png"
      }
    ];
    return { products };
  }
}
