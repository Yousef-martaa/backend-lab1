export function verifyAPIKey(req, res, next) {

    const validAPIKey = "12345";

    const apiKeyQuery = req.query.apiKey;
    const apiKeyHeader = req.headers["x-api-key"];

    if (apiKeyQuery === validAPIKey || apiKeyHeader === validAPIKey) {
        next();
    } else {
        res.status(403).json({ message: "Invalid API Key" });
    }
}