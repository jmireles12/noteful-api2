module.exports = {
    PORT: process.env.PORT || 8000,
    NODE_ENV: process.env.NODE_ENV || 'development',
    DATABASE_URL: process.env.DATABASE_URL || 'postgres://nfopeqpshvuprr:4972c86443d79ec6f97307a4b5ba297d5fc8be92529f9f193ad4d2403259e52d@ec2-52-44-235-121.compute-1.amazonaws.com:5432/d51t7qjs5snitl',
    TEST_DATABASE_URL: process.env.TEST_DATABASE_URL || 'postgresql://dunder_mifflin@localhost/noteful-test'
}