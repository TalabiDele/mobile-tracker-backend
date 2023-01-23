module.exports = ({ env }) => ({
  // ...
  "vercel-deploy": {
    enabled: true,
    config: {
      deployHook:
        "https://api.vercel.com/v1/integrations/deploy/prj_4QnRVJ3dwHJ0Yhx3r34mqDk29kTT/RI1Mt5tYQb",
      apiToken: "2cVRbLBlC6nqKJzscfh3ByYH",
      appFilter: "mobile-tracker-backend",
      teamFilter: "GXvlIUj3pZjbxRatik6wizD7",
      roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
    },
  },
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  // ...
});
