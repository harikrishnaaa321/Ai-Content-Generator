/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./utils/schema.tsx",
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://aiContentGenerator_owner:fugtHTUiL0q6@ep-flat-queen-a1bo9pkn.ap-southeast-1.aws.neon.tech/aiContentGenerator?sslmode=require'
  }
};
