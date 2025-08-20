export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({error:'Method not allowed'});
  const { message } = req.body || {};
  // Demo placeholder reply. When OPENAI_API_KEY is set, replace with OpenAI call.
  const reply = message ? `Carys (demo): I received your message - "${message}"` : 'Carys (demo): Hello!';
  return res.status(200).json({ reply });
}
