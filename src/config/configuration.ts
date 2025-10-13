export default () => ({
jwt: { secret: process.env.JWT_SECRET || 'dev_secret', expiresIn: '15m' },
db: { url: process.env.DATABASE_URL },
s3: {
bucket: process.env.S3_BUCKET || '',
region: process.env.S3_REGION || 'us-east-1',
accessKeyId: process.env.S3_ACCESS_KEY_ID || '',
secretAccessKey: process.env.S3_SECRET_ACCESS_KEY || '',
},
stripe: { secret: process.env.STRIPE_SECRET_KEY || '' },
})
