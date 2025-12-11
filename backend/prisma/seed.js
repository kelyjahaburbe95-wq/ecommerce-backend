import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {

  await prisma.produit.createMany({
    data: [
      {
        nom: "iPhone 14",
        description: "Smartphone Apple dernière génération",
        prix: 999,
        image: "https://via.placeholder.com/200"
      },
      {
        nom: "AirPods",
        description: "Écouteurs sans fil Apple",
        prix: 199,
        image: "https://via.placeholder.com/200"
      },
      {
        nom: "MacBook Pro",
        description: "Ordinateur portable performant",
        prix: 1999,
        image: "https://via.placeholder.com/200"
      }
    ]
  });

  console.log("🌱 Base de données remplie !");
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
