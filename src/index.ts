import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  return c.text("API Active!");
});

app.get("/current", async (c) => {
  const data = await c.req.raw.cf;
  console.log(data);
  const locationData = {
    city: data!.city,
    provider: data!.asOrganization,
    continent: data!.continent,
    country: data!.country,
    latitude: data!.latitude,
    longitude: data!.longitude,
    postalCode: data!.postalCode,
    region: data!.region,
    regionCode: data!.regionCode,
    timezone: data!.timezone,
    airport_code: data!.colo,
    asn: data!.asn,
    botDetect: data!.botManagement,
  };
  return c.json(locationData);
});

export default app;
