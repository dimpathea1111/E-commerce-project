// export type Product={
//     id:number,
//     title:string,
//     price:number,
//     image:string,
//     category:string,
//     description:string

// }

export type Product = {
  id: number
  title: string
  price: number
  description: string
  category: string
  images: string[]   // array because API may have multiple images
  rating?: {
    rate: number
    count: number
  }
}
