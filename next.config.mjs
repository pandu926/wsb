import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
    disable: process.env.NODE_ENV === "development",
    dest: "public",
    register: true,
    scope: "/app",
    sw: "service-worker.js",
    fallbacks: {
        image: "/img/bg.svg",
    },

});

// Your Next config is automatically typed!
export default withPWA({
    // Your Next.js config
});