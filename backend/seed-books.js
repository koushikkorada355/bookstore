const GENRES = [
  'Fiction',
  'Fantasy',
  'Science Fiction',
  'Mystery',
  'Thriller',
  'Romance',
  'History',
  'Biography',
  'Psychology',
  'Self Help',
  'Business',
  'Finance',
  'Programming',
  'Productivity',
  'Philosophy',
  'Health',
  'Lifestyle',
  'Education'
];

const ADJECTIVES = [
  'Hidden',
  'Silent',
  'Atomic',
  'Practical',
  'Modern',
  'Complete',
  'Intelligent',
  'Essential',
  'Advanced',
  'Creative',
  'Focused',
  'Mindful',
  'Strategic',
  'Bold',
  'Curious',
  'Endless'
];

const SUBJECTS = [
  'Habits',
  'Minds',
  'Systems',
  'Patterns',
  'Stories',
  'Algorithms',
  'Leadership',
  'Wealth',
  'Future',
  'Focus',
  'Learning',
  'Design',
  'Thinking',
  'Growth',
  'Innovation',
  'Craft'
];

const AUTHOR_FIRST_NAMES = [
  'Aarav',
  'Maya',
  'Noah',
  'Isha',
  'Liam',
  'Ava',
  'Ethan',
  'Sophia',
  'Rohan',
  'Olivia',
  'Daniel',
  'Emma',
  'Arjun',
  'Mia',
  'Lucas',
  'Zara'
];

const AUTHOR_LAST_NAMES = [
  'Sharma',
  'Patel',
  'Singh',
  'Mehta',
  'Gupta',
  'Rao',
  'Kapoor',
  'Iyer',
  'Verma',
  'Das',
  'Brown',
  'Clark',
  'Miller',
  'Davis',
  'Wilson',
  'Taylor'
];

const COVER_IMAGES = [
  'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1455885666463-9c6d7a8d1f8b?auto=format&fit=crop&w=800&q=80'
];

const numberFromEnv = Number.parseInt(process.env.BOOK_COUNT || '', 10);
const BOOK_COUNT = Number.isInteger(numberFromEnv) && numberFromEnv > 0 ? numberFromEnv : 100;

const buildBooks = count => {
  const books = [];

  for (let i = 0; i < count; i += 1) {
    const adjective = ADJECTIVES[i % ADJECTIVES.length];
    const subject = SUBJECTS[(i + 3) % SUBJECTS.length];
    const genre = GENRES[i % GENRES.length];
    const firstName = AUTHOR_FIRST_NAMES[(i + 5) % AUTHOR_FIRST_NAMES.length];
    const lastName = AUTHOR_LAST_NAMES[(i + 7) % AUTHOR_LAST_NAMES.length];

    books.push({
      title: `${adjective} ${subject} ${i + 1}`,
      author: `${firstName} ${lastName}`,
      genre,
      price: 199 + ((i * 37) % 701),
      description: `An engaging ${genre.toLowerCase()} title that explores ${subject.toLowerCase()} with clear, practical insights.`,
      coverImage: COVER_IMAGES[i % COVER_IMAGES.length],
      stock: 5 + ((i * 3) % 61),
      rating: Number((3.5 + ((i * 7) % 16) / 10).toFixed(1)),
      reviews_count: 0
    });
  }

  return books;
};

const seedBooks = async () => {
  const connectDB = require('./config/db');
  const Book = require('./models/Book');

  await connectDB();

  await Book.deleteMany({});
  const books = buildBooks(BOOK_COUNT);
  await Book.insertMany(books);

  console.log(`Seeded ${books.length} books successfully`);
  process.exit(0);
};

if (require.main === module) {
  seedBooks().catch(error => {
    console.error('Book seeding failed', error);
    process.exit(1);
  });
}

module.exports = { seedBooks, buildBooks };
