export default async function handler(req, res) {
    const { url } = req.query;

    if (!url) {
        return res.status(400).json({ error: "url is required" });
    }

    try {
        const accessToken = process.env.META_OEMBED_TOKEN;

        const metaUrl =
            `https://graph.facebook.com/v22.0/instagram_oembed` +
            `?url=${encodeURIComponent(url)}` +
            `&access_token=${accessToken}`;

        const response = await fetch(metaUrl);
        const data = await response.json();

        if (!response.ok) {
            return res.status(400).json(data);
        }

        return res.status(200).json(data);
    } catch (e) {
        return res.status(500).json({ error: "server error" });
    }
}
