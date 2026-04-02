const BASE_URL = 'http://1.95.142.151:3000/v1/chat/completions';
const MODEL = 'claude-haiku-4-5-20251001';

export async function callAI(systemPrompt: string, userPrompt: string): Promise<string> {
  const apiKey = process.env.EXPO_PUBLIC_AI_API_KEY;

  const response = await fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: MODEL,
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userPrompt },
      ],
    }),
  });

  if (!response.ok) {
    throw new Error(`AI API error: ${response.status} ${response.statusText}`);
  }

  const data = await response.json();
  return data.choices[0].message.content as string;
}
