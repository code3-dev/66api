# 66API Documentation

## Overview

66API is a simple API built with NestJS that provides the current date and time in both Gregorian and Shamsi (Persian) formats. Additionally, it offers a route to retrieve the current date and time as an image.

## API Endpoints

### 1. Get Current Time

**Endpoint**: `GET /get/time`

This endpoint returns the current date and time in both Gregorian and Shamsi formats.

#### Example Response:

```json
{
  "gregorian": {
    "year": 2024,
    "month": 12,
    "monthName": "December",
    "day": 26,
    "formatted": "2024-12-26"
  },
  "shamsi": {
    "year": 1403,
    "month": 10,
    "monthName": "Azar",
    "faMonthName": "آذر",
    "day": 5,
    "formatted": "1403/10/05"
  }
}
```

### 2. Get Current Time as Image

**Endpoint**: `GET /get/image`

This endpoint returns an image containing the current date and time in both Gregorian and Shamsi formats.

### Request Example for Both Endpoints

You can make requests to the API using tools like `curl`, Postman, or directly in the browser:

#### Example 1: Get Time in JSON Format

```bash
curl http://localhost:3000/get/time
```

#### Example 2: Get Time as Image

```bash
curl http://localhost:3000/get/image --output time_image.png
```