# 66API

66API is a simple API built with NestJS to perform various date-related operations, such as calculating age, converting between Gregorian and Shamsi dates, and finding the difference between two dates. The API supports both `GET` and `POST` requests.

This API can be deployed and run on Vercel.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/code3-dev/66api)

---

### Demo
You can try out the API live at: [https://66api.vercel.app/](https://66api.vercel.app/).

---

## Running the API

### 1. Clone the Repository
```bash
$ git clone https://github.com/code3-dev/66api.git
$ cd 66api
```

### 2. Install Dependencies
```bash
$ npm install
```

### 3. Development Mode
```bash
$ npm run start
```

### 4. Watch Mode
```bash
$ npm run start:dev
```

### 5. Production Mode
```bash
$ npm run start:prod
```

### 6. Build the Application
```bash
$ npm run build
```

### 7. Run the Production Server
```bash
$ node dist/main.js
```

---

### 1. Get Current Time
- **Endpoint (GET):**
  ```
  http://localhost:3000/get/time
  ```
  **Description:** Returns the current time.

- **Endpoint (GET):**
  ```
  http://localhost:3000/get/image
  ```
  **Description:** Returns the current time as an image.

---

### 2. Calculate Age

#### 2.1 Age Calculation with Gregorian Date
- **Endpoint (GET):**
  ```
  http://localhost:3000/age/gregorian?birthdate=2005-02-10
  ```
  **Description:** Calculates the age based on the provided Gregorian birthdate.

- **Endpoint (POST):**
  ```
  http://localhost:3000/age/gregorian
  ```
  **Request Header:**
  ```
  Content-Type: application/json
  ```
  **Request Body:**
  ```json
  {
    "birthdate": "2005-02-10"
  }
  ```

#### 2.2 Age Calculation with Shamsi Date
- **Endpoint (GET):**
  ```
  http://localhost:3000/age/shamsi?birthdate=1383/11/22
  ```
  **Description:** Calculates the age based on the provided Shamsi birthdate.

- **Endpoint (POST):**
  ```
  http://localhost:3000/age/shamsi
  ```
  **Request Header:**
  ```
  Content-Type: application/json
  ```
  **Request Body:**
  ```json
  {
    "birthdate": "1383/11/22"
  }
  ```

---

### 3. Date Conversion

#### 3.1 Convert Gregorian Date to Shamsi
- **Endpoint (GET):**
  ```
  http://localhost:3000/conversion/gregorian-to-shamsi?gregorianDate=2005-02-10
  ```
  **Description:** Converts the given Gregorian date to Shamsi.

- **Endpoint (POST):**
  ```
  http://localhost:3000/conversion/gregorian-to-shamsi
  ```
  **Request Header:**
  ```
  Content-Type: application/json
  ```
  **Request Body:**
  ```json
  {
    "gregorianDate": "2005-02-10"
  }
  ```

#### 3.2 Convert Shamsi Date to Gregorian
- **Endpoint (GET):**
  ```
  http://localhost:3000/conversion/shamsi-to-gregorian?shamsiDate=1383/01/22
  ```
  **Description:** Converts the given Shamsi date to Gregorian.

- **Endpoint (POST):**
  ```
  http://localhost:3000/conversion/shamsi-to-gregorian
  ```
  **Request Header:**
  ```
  Content-Type: application/json
  ```
  **Request Body:**
  ```json
  {
    "shamsiDate": "1383/01/22"
  }
  ```

---

### 4. Calculate Time Difference

#### 4.1 Difference Between Two Shamsi Dates
- **Endpoint (GET):**
  ```
  http://localhost:3000/diff/shamsi?startDate=1402/10/12&endDate=1403/10/12
  ```
  **Description:** Calculates the difference between two Shamsi dates.

- **Endpoint (POST):**
  ```
  http://localhost:3000/diff/shamsi
  ```
  **Request Header:**
  ```
  Content-Type: application/json
  ```
  **Request Body:**
  ```json
  {
    "startDate": "1402/10/01",
    "endDate": "1403/10/04"
  }
  ```

#### 4.2 Difference Between Two Gregorian Dates
- **Endpoint (GET):**
  ```
  http://localhost:3000/diff/gregorian?startDate=2024-01-01&endDate=2024-12-25
  ```
  **Description:** Calculates the difference between two Gregorian dates.

- **Endpoint (POST):**
  ```
  http://localhost:3000/diff/gregorian
  ```
  **Request Header:**
  ```
  Content-Type: application/json
  ```
  **Request Body:**
  ```json
  {
    "startDate": "2024-01-01",
    "endDate": "2024-12-25"
  }
  ```

---

## General Notes
- All `POST` requests should include the `Content-Type: application/json` header.
- The date format for Gregorian dates is `YYYY-MM-DD`, and for Shamsi dates, it is `YYYY/MM/DD`.

## Contact

For any queries or issues, please contact:

- **Name:** Hossein Pira
- **Email:** [h3dev.pira@gmail.com](mailto:h3dev.pira@gmail.com)
- **Instagram**: [@h3dev.pira](https://instagram.com/h3dev.pira)
- **Telegram:** [@h3dev](https://t.me/h3dev)