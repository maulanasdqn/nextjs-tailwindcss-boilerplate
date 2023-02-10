const configs = {
  env: process.env.NEXT_PUBLIC_ENV || "",
  host: process.env.NEXT_PUBLIC_HOST || "",
  apiURL: process.env.NEXT_PUBLIC_API_URL || "",
};

export default configs;
