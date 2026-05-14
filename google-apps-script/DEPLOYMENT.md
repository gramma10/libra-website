# Contact Form — Google Apps Script Deployment

Ο διακομιστής για τη φόρμα επικοινωνίας τρέχει ως Google Apps Script Web App, ώστε να αποστέλλει email **και** να ενημερώνει το Google Sheet χωρίς service account ή OAuth setup.

## Tι κάνει
- Δέχεται POST από το `/api/contact` του Next.js site.
- Γράφει μία γραμμή στο [Sheet 1U_u-_PtqjgFyFHu0hxiLYtha9yzWv7N9sbcCy8dqJyA](https://docs.google.com/spreadsheets/d/1U_u-_PtqjgFyFHu0hxiLYtha9yzWv7N9sbcCy8dqJyA/edit).
- Στέλνει email ειδοποίησης στο `auragram.web@gmail.com`.

## One-time setup (≈ 2 λεπτά)

1. Ανοίξτε [https://script.google.com](https://script.google.com) με τον λογαριασμό `auragram.web@gmail.com`.
2. Νέο project → **New project**.
3. Διαγράψτε το placeholder `Code.gs` και επικολλήστε το περιεχόμενο του [`Code.gs`](./Code.gs).
4. (Προαιρετικό) Στις ρυθμίσεις project → **Show appsscript.json manifest** → επικολλήστε το [`appsscript.json`](./appsscript.json).
5. Πατήστε **Deploy ▸ New deployment**.
   - **Type:** *Web app*
   - **Description:** `Libra contact form`
   - **Execute as:** *Me (auragram.web@gmail.com)*
   - **Who has access:** *Anyone*
6. Εξουσιοδοτήστε το script όταν σας ζητηθεί.
7. Αντιγράψτε το URL που εμφανίζεται (της μορφής `https://script.google.com/macros/s/AKfyc.../exec`).
8. Στο root του Next.js project δημιουργήστε `.env.local`:

   ```
   APPS_SCRIPT_URL=https://script.google.com/macros/s/AKfyc.../exec
   ```

9. Restart `npm run dev` ώστε να φορτωθεί το νέο env var.

## Αν αλλάξετε το Apps Script αργότερα

Πατήστε **Deploy ▸ Manage deployments ▸ Edit (μολυβάκι) ▸ Version: New version ▸ Deploy**. Το URL παραμένει το ίδιο.

## Δοκιμή

```bash
curl -X POST $APPS_SCRIPT_URL \
  -H 'Content-Type: application/json' \
  -d '{"firstName":"Test","lastName":"User","email":"test@example.com","phone":"6900000000","shops":"1"}'
```

Θα πρέπει να επιστρέψει `{"ok":true}`, να εμφανιστεί νέα γραμμή στο Sheet και email στο `auragram.web@gmail.com`.

## Hosting Notes (Vercel / άλλος host)

Στο production host (π.χ. Vercel) προσθέστε το `APPS_SCRIPT_URL` στα Environment Variables. Το `.env.local` δουλεύει μόνο τοπικά.
