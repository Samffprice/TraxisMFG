# DNS & Email Security Setup Guide for traxismfg.com

## 🔒 SPF Record Setup (HIGH PRIORITY)

Add this SPF record to your DNS to prevent email spoofing:

```
Type: TXT
Name: @ (or root domain)
Value: v=spf1 include:_spf.google.com include:mailgun.org include:sendgrid.net ~all
```

**Explanation:**
- `v=spf1` - SPF version 1
- `include:_spf.google.com` - If using Google Workspace/Gmail
- `include:mailgun.org` - If using Mailgun for transactional emails
- `include:sendgrid.net` - If using SendGrid for newsletters
- `~all` - Soft fail for unlisted servers (recommended for testing)

### For Production (after testing):
Change `~all` to `-all` for stricter policy:
```
v=spf1 include:_spf.google.com -all
```

## 🛡️ Additional Security Records

### DKIM Record
If using Google Workspace, add the DKIM key provided by Google:
```
Type: TXT
Name: google._domainkey
Value: [Your Google-provided DKIM key]
```

### DMARC Record
Add DMARC policy for advanced email security:
```
Type: TXT
Name: _dmarc
Value: v=DMARC1; p=quarantine; rua=mailto:admin@traxismfg.com; ruf=mailto:admin@traxismfg.com; fo=1
```

## 🚀 Performance DNS Records

### CAA Record (Certificate Authority Authorization)
```
Type: CAA
Name: @
Value: 0 issue "letsencrypt.org"
```

### Subdomain Setup for CDN
```
Type: CNAME
Name: cdn
Value: your-cdn-provider.net
```

## 📧 Email Configuration

### MX Records (if using Google Workspace)
```
Priority: 1,  Name: @, Value: smtp.google.com
Priority: 5,  Name: @, Value: smtp2.google.com
Priority: 5,  Name: @, Value: smtp3.google.com
Priority: 10, Name: @, Value: smtp4.google.com
```

### Contact Form Setup
For the website contact forms, consider:
1. **Formspree.io** - Simple form handling
2. **Netlify Forms** - If hosting on Netlify  
3. **Custom API** - Using the `/server/api/` directory

## 🔍 Verification Steps

1. **SPF Checker**: Use https://www.kitterman.com/spf/validate.html
2. **DMARC Analyzer**: https://dmarc.org/dmarc-check/
3. **DNS Propagation**: https://dnschecker.org/
4. **SSL Test**: https://www.ssllabs.com/ssltest/

## 📱 Local Development

For development, you can test email functionality with:
```bash
# Install local SMTP server
npm install -g maildev
maildev
```

Then configure your app to use `localhost:1025` for SMTP.

---

**Note**: Replace placeholder values with your actual provider information. Test thoroughly before implementing in production.