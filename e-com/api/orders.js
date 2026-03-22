export default function handler(req, res) {
  res.status(200).json([
    {
      id: "order1",
      orderTimeMs: Date.now(),
      totalCostCents: 3000,
      products: [
        {
          quantity: 2,
          estimatedDeliveryTimeMs: Date.now() + 3 * 24 * 60 * 60 * 1000,
          product: {
            id: "1",
            name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
            image: "/images/products/athletic-cotton-socks-6-pairs.jpg"
          }
        }
      ]
    }
  ]);
}