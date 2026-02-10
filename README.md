# Bajaj Finserv Backend Assignment

This project is a REST API solution for the Chitkara University Qualifier (Class of 2027), developed using **Next.js** and **TypeScript**. It implements strict API specifications for mathematical operations and AI integration.

## 🚀 Deployed API
**Base URL:** `https://bajaj-finserv-backend-assignment.vercel.app`

### Live Endpoints
- **Health Check (GET)**: [https://bajaj-finserv-backend-assignment.vercel.app/api/health](https://bajaj-finserv-backend-assignment.vercel.app/api/health)
- **BFHL (POST)**: `https://bajaj-finserv-backend-assignment.vercel.app/api/bfhl`

## 🛠 Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Validation**: Zod
- **AI Integration**: Google Gemini (`@google/generative-ai`)
- **Deployment**: Vercel

## 📋 API Documentation

### 1. Health Check
**Endpoint:** `GET /api/health`

**Response:**
```json
{
  "is_success": true,
  "official_email": "YOUR_CHITKARA_EMAIL"
}
```

### 2. Functional Endpoint
**Endpoint:** `POST /api/bfhl`

**Headers:**
`Content-Type: application/json`

**Supported Keys:**
- `fibonacci`: Returns first `n` Fibonacci numbers.
- `prime`: Returns prime numbers from an array.
- `lcm`: Calculates LCM of an array.
- `hcf`: Calculates HCF of an array.
- `AI`: Returns a single-word answer to a question.

#### Examples

**Fibonacci:**
Request: `{ "fibonacci": 7 }`
Response: `{ "is_success": true, "email": "...", "data": [0,1,1,2,3,5,8] }`

**Prime Numbers:**
Request: `{ "prime": [2, 4, 7, 9, 11] }`
Response: `{ "is_success": true, "email": "...", "data": [2, 7, 11] }`

**LCM:**
Request: `{ "lcm": [12, 18, 24] }`
Response: `{ "is_success": true, "email": "...", "data": 72 }`

**HCF:**
Request: `{ "hcf": [24, 36, 60] }`
Response: `{ "is_success": true, "email": "...", "data": 12 }`

**AI Question:**
Request: `{ "AI": "What is the capital of India?" }`
Response: `{ "is_success": true, "email": "...", "data": "New Delhi" }`

## ⚙️ Setup & Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd <project-folder>
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env.local` file:
   ```env
   OFFICIAL_EMAIL=your_email@chitkara.edu.in
   GEMINI_API_KEY=your_gemini_api_key
   ```

4. **Run Locally:**
   ```bash
   npm run dev
   ```

## 🧪 Testing
You can test the API using `curl` or Postman.

```bash
# Test Health
curl -X GET https://bajaj-finserv-backend-assignment.vercel.app/api/health

# Test Fibonacci
curl -X POST https://bajaj-finserv-backend-assignment.vercel.app/api/bfhl \
  -H "Content-Type: application/json" \
  -d '{"fibonacci": 10}'
```

## 🔒 Security & Validation
- **Input Validation**: Uses `zod` to strictly enforce request structure.
- **Error Handling**: Graceful error messages with appropriate HTTP status codes (200, 400, 500).
- **Edge Cases**: Handles empty arrays, negative numbers, and invalid types securely.
