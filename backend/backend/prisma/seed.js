const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main(){
  const data = [
    { name: "T-shirt Graphique", slug:"tshirt-graphique", description:"T-shirt stylé", priceCents:1999, imageUrl:"https://picsum.photos/seed/tshirt/800/600", inventory:50 },
    { name: "Casquette", slug:"casquette", description:"Casquette stylée", priceCents:1299, imageUrl:"https://picsum.photos/seed/cap/800/600", inventory:30 },
    { name: "Hoodie", slug:"hoodie", description:"Hoodie confortable", priceCents:3499, imageUrl:"https://picsum.photos/seed/hoodie/800/600", inventory:20 }
  ];

  for (const p of data){
    await prisma.product.upsert({
      where: { slug: p.slug },
      update: p,
      create: p
    });
  }

  console.log("Seed done.");
}
main()
  .catch(e => { console.error(e); process.exit(1); })
  .finally(() => prisma.$disconnect());
