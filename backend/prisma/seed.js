import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.product.createMany({
    data: [
      { name: "Produit 1", price: 19.99, image: "image1.jpg" },
      { name: "Produit 2", price: 29.99, image: "image2.jpg" },
      { name: "Produit 3", price: 39.99, image: "image3.jpg" }
    ]
  });
}

main()
  .then(() => {
    console.log("Seed OK !");
    prisma.$disconnect();
  })
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
  });
