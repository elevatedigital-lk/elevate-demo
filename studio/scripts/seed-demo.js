#!/usr/bin/env node
/**
 * Seed script for Elevate Demo catalog
 * Creates 25-30 sample products across diverse categories
 * with 4-5 collections and realistic LKR pricing
 *
 * Usage: SANITY_TOKEN=<token> node studio/scripts/seed-demo.js
 */

import {createClient} from '@sanity/client'

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID || 'YOUR_PROJECT_ID',
  dataset: process.env.SANITY_DATASET || 'production',
  token: process.env.SANITY_TOKEN,
  apiVersion: '2024-01-01',
  useCdn: false,
})

const products = [
  // Clothing (7)
  {name: 'Premium Unisex T-Shirt', nameSi: 'ඉහළ ටී-ශර්ට්', code: 'ED-001', price: 1490, category: 'Clothing', type: 'Casual'},
  {name: 'Comfortable Hoodie', nameSi: 'සුවපහසු Hoodie', code: 'ED-002', price: 2890, category: 'Clothing', type: 'Casual'},
  {name: 'Classic Jeans', nameSi: 'සම්ප්‍රදායික Jeans', code: 'ED-003', price: 3290, category: 'Clothing', type: 'Casual'},
  {name: 'Summer Tank Top', nameSi: 'ගිම්හාන Tank Top', code: 'ED-004', price: 890, category: 'Clothing', type: 'Casual'},
  {name: 'Elegant Cardigan', nameSi: 'ගරිමාන්විත Cardigan', code: 'ED-005', price: 2690, category: 'Clothing', type: 'Office'},
  {name: 'Athletic Shorts', nameSi: 'ක්‍රීඩා Shorts', code: 'ED-006', price: 1190, category: 'Clothing', type: 'Sports'},
  {name: 'Warm Winter Coat', nameSi: 'උෂ්ණ ශීත Coat', code: 'ED-007', price: 5490, category: 'Clothing', type: 'Casual'},

  // Footwear (6)
  {name: 'Everyday Canvas Sneaker', nameSi: 'දෛනික Canvas Sneaker', code: 'ED-F01', price: 2190, category: 'Footwear', type: 'Casual'},
  {name: 'Comfortable Flip Flop', nameSi: 'සුවපහසු Flip Flop', code: 'ED-F02', price: 690, category: 'Footwear', type: 'Casual'},
  {name: 'Professional Work Boot', nameSi: 'වෘත්තිකරණ කාර්ය Boot', code: 'ED-F03', price: 4890, category: 'Footwear', type: 'Office'},
  {name: 'Ladies Fashion Heel', nameSi: 'කාන්තා ෆ්‍ය Heel', code: 'ED-F04', price: 3590, category: 'Footwear', type: 'Office'},
  {name: 'Trail Running Shoe', nameSi: 'පස්ටර් දුවමින් Shoe', code: 'ED-F05', price: 5290, category: 'Footwear', type: 'Sports'},
  {name: 'Casual Loafer Slip-On', nameSi: 'අවිශ්වාසර Loafer Slip-On', code: 'ED-F06', price: 2790, category: 'Footwear', type: 'Casual'},

  // Home Goods (6)
  {name: 'Soft Cotton Pillow', nameSi: 'මෘදු කාර්බන් Pillow', code: 'ED-H01', price: 1890, category: 'Home Goods', type: 'Decor'},
  {name: 'Premium Bedsheet Set', nameSi: 'ඉහළ Bedsheet Set', code: 'ED-H02', price: 3490, category: 'Home Goods', type: 'Decor'},
  {name: 'Modern Wall Clock', nameSi: 'අතුරු කාල Clock', code: 'ED-H03', price: 2290, category: 'Home Goods', type: 'Decor'},
  {name: 'Scented Candle Set', nameSi: 'සුවඳ Candle Set', code: 'ED-H04', price: 1690, category: 'Home Goods', type: 'Decor'},
  {name: 'Decorative Throw Rug', nameSi: 'ගරිමාන්විත Throw Rug', code: 'ED-H05', price: 2590, category: 'Home Goods', type: 'Decor'},
  {name: 'Stainless Steel Kitchenware', nameSi: 'Stainless Steel Kitchen', code: 'ED-H06', price: 4290, category: 'Home Goods', type: 'Kitchen'},

  // Electronics (5)
  {name: 'Wireless Bluetooth Speaker', nameSi: 'Wireless Bluetooth Speaker', code: 'ED-E01', price: 4990, category: 'Electronics', type: 'Tech'},
  {name: 'Phone Charging Cable (3m)', nameSi: 'Phone Charging Cable', code: 'ED-E02', price: 890, category: 'Electronics', type: 'Tech'},
  {name: 'LED Desk Lamp', nameSi: 'LED Desk Lamp', code: 'ED-E03', price: 2190, category: 'Electronics', type: 'Tech'},
  {name: 'USB-C Hub Adapter', nameSi: 'USB-C Hub Adapter', code: 'ED-E04', price: 3290, category: 'Electronics', type: 'Tech'},
  {name: 'Portable Power Bank 20000mAh', nameSi: 'Portable Power Bank', code: 'ED-E05', price: 3990, category: 'Electronics', type: 'Tech'},
]

const categories = [
  {_type: 'category', name: 'Clothing', nameSi: 'ඇඟට'},
  {_type: 'category', name: 'Footwear', nameSi: 'බූට'},
  {_type: 'category', name: 'Home Goods', nameSi: 'හෝම්'},
  {_type: 'category', name: 'Electronics', nameSi: 'ඉලෙක්ට්‍රොනිකා'},
]

const types = [
  {_type: 'productType', name: 'Casual', nameSi: 'අවිශ්වාසර'},
  {_type: 'productType', name: 'Office', nameSi: 'කාර්යාලය'},
  {_type: 'productType', name: 'Sports', nameSi: 'ක්‍රීඩා'},
  {_type: 'productType', name: 'Decor', nameSi: 'සැරසිලි'},
  {_type: 'productType', name: 'Kitchen', nameSi: 'පිසින්න'},
  {_type: 'productType', name: 'Tech', nameSi: 'තාක්ෂණ'},
]

const collections = [
  {
    _type: 'collection',
    name: 'Featured Products',
    nameSi: 'සුපුරුදු නිෂ්පාදන',
    slug: 'featured-products',
    description: 'Handpicked products we love.',
    descriptionSi: 'අපි ප්‍රිය පිරිසිදු නිෂ්පාදන.',
    order: 1,
  },
  {
    _type: 'collection',
    name: 'Trending',
    nameSi: 'ප්‍රවණතා',
    slug: 'trending',
    description: 'What\'s popular right now.',
    descriptionSi: 'එනම් ජනප්‍රිය දැනටමත්.',
    order: 2,
  },
  {
    _type: 'collection',
    name: 'Budget Friendly',
    nameSi: 'අයවලට සුදුසු',
    slug: 'budget-friendly',
    description: 'Best value for your money.',
    descriptionSi: 'ඔබගේ මුදලට හොඳම වටිනාකම.',
    order: 3,
  },
  {
    _type: 'collection',
    name: 'New In',
    nameSi: 'නව අතුළු',
    slug: 'new-in',
    description: 'Fresh arrivals this week.',
    descriptionSi: 'නිවේශ ඇවිත්තු මෙම සතිය.',
    order: 4,
  },
  {
    _type: 'collection',
    name: 'Top Rated',
    nameSi: 'ඉතා සිටින',
    slug: 'top-rated',
    description: 'Customer favorites.',
    descriptionSi: 'ගෙවතුරු ප්‍රිය.',
    order: 5,
  },
]

const offer = {
  _type: 'offer',
  title: 'Weekend Special',
  titleSi: 'සතින්දා විශේෂ',
  bannerTextEn: '🌟 Up to 25% OFF this weekend',
  bannerTextSi: '🌟 මෙම සතින්දා 25% දක්වා OFF',
  discount: 25,
  startDate: new Date().toISOString().split('T')[0],
  endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
  products: [],
}

async function seed() {
  try {
    console.log('Creating categories...')
    const createdCategories = await Promise.all(categories.map(cat => client.create(cat)))
    const categoryMap = Object.fromEntries(createdCategories.map(cat => [cat.name, cat._id]))

    console.log('Creating types...')
    const createdTypes = await Promise.all(types.map(t => client.create(t)))
    const typeMap = Object.fromEntries(createdTypes.map(t => [t.name, t._id]))

    console.log('Creating products...')
    const createdProducts = await Promise.all(
      products.map(p =>
        client.create({
          _type: 'product',
          name: p.name,
          nameSi: p.nameSi,
          code: p.code,
          price: p.price,
          category: {_type: 'reference', _ref: categoryMap[p.category]},
          productType: {_type: 'reference', _ref: typeMap[p.type]},
          inStock: true,
          images: [
            {
              _type: 'image',
              asset: {_type: 'reference', _ref: 'image-product-1'},
              alt: p.name,
            },
          ],
        }),
      ),
    )

    console.log('Creating collections with products...')
    const updatedCollections = collections.map(coll => ({
      ...coll,
      products: createdProducts
        .filter((_, i) => {
          if (coll.slug === 'featured-products') return i < 8
          if (coll.slug === 'trending') return i < 10
          if (coll.slug === 'budget-friendly') return [0, 2, 4, 6, 8, 10, 12, 14].includes(i)
          if (coll.slug === 'new-in') return i < 7
          if (coll.slug === 'top-rated') return i % 2 === 0
          return false
        })
        .map(p => ({_type: 'reference', _ref: p._id})),
    }))

    const createdCollections = await Promise.all(
      updatedCollections.map(coll => client.create(coll)),
    )

    console.log('Creating offer...')
    const offerWithProducts = {
      ...offer,
      products: createdProducts.slice(0, 6).map(p => ({_type: 'reference', _ref: p._id})),
    }
    const createdOffer = await client.create(offerWithProducts)

    console.log('\n✅ Seeding complete!')
    console.log(`Created ${createdProducts.length} products`)
    console.log(`Created ${createdCategories.length} categories`)
    console.log(`Created ${createdTypes.length} types`)
    console.log(`Created ${createdCollections.length} collections`)
    console.log(`Created 1 offer`)
  } catch (error) {
    console.error('Seed failed:', error)
    process.exit(1)
  }
}

seed()
