
export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/api/health") {
      return Response.json({
        ok: true,
        app: "CorpIndex",
        service: "worker-api",
        message: "Backend aktif"
      });
    }

    return env.ASSETS.fetch(request);
  }
};
