import http from "k6/http";
import { check, sleep } from "k6";

// Test options
export let options = {
  vus: 100, // 50 virtual users (adjust based on your PC)
  duration: "30s", // Run for 30 seconds
  thresholds: {
    http_req_duration: ["p(95)<500"], // 95% of requests should be < 500ms
    http_req_failed: ["rate<0.05"], // Fail rate < 5%
  },
};

export default function () {
  // Hit the middleware Nginx load balancer
  const res = http.get("http://middleware:80/api/rate");

  // Check response status
  check(res, {
    "status is 200": (r) => r.status === 200,
    "response has gold_price": (r) => r.json("gold_price") !== undefined,
  });

  sleep(1); // wait 1 second between requests per user
}
