#!/bin/bash
# Submit all site URLs to IndexNow (Bing/Yandex) after deployment
# Usage: ./scripts/indexnow-submit.sh

KEY="f5baa27128ac48dbb62eeba10dd51751"
HOST="www.antekautomation.com"

curl -s -X POST "https://api.indexnow.org/IndexNow" \
  -H "Content-Type: application/json" \
  -d "{
    \"host\": \"${HOST}\",
    \"key\": \"${KEY}\",
    \"keyLocation\": \"https://${HOST}/${KEY}.txt\",
    \"urlList\": [
      \"https://${HOST}/\",
      \"https://${HOST}/about\",
      \"https://${HOST}/contact\",
      \"https://${HOST}/services/ai-voice-assistants\",
      \"https://${HOST}/services/ai-chatbots\",
      \"https://${HOST}/services/workflow-automation\",
      \"https://${HOST}/locations/london\",
      \"https://${HOST}/locations/hampshire\",
      \"https://${HOST}/locations/birmingham\",
      \"https://${HOST}/locations/manchester\",
      \"https://${HOST}/locations/glasgow\",
      \"https://${HOST}/locations/leeds\",
      \"https://${HOST}/locations/liverpool\",
      \"https://${HOST}/locations/newcastle\",
      \"https://${HOST}/locations/southampton\",
      \"https://${HOST}/locations/andover\"
    ]
  }"

echo ""
echo "IndexNow submission complete. HTTP 200 = accepted, 202 = queued."
