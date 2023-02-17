# Discord-Bot-Template V.14

Template bot

## การติดตั้ง (ใช้ใน Terminal)
1. ให้ Clone project นี้ไปยัง folders (ติดตั้ง [Git](https://git-scm.com/downloads) ก่อนนะเดี๋ยวใช้ไม่ได้ !)
```
git clone https://github.com/FujaTyping/Discord-Bot-Template.git
```
2. ใช้ตัวติดตั้ง [node](https://nodejs.org/en/) เพื่อติดตั้งระบบทั้งหมด .

```bash
npm install
```
## สร้างบอท
1. ให้ไปที่ [DiscordDevPortal](https://discord.com/developers/applications)
2. กด Create new application
3. ตั้งชื่อบอท แล้ว กด Create
4. ไปที่เมนู Bot แล้วกด Add bot
5. เอาบอท TOKEN ไปที่เมนู Bot > Build a bot > Token (กด Coppy มาได้เลย)
6. เชิญบอทเข้าเชิฟเวอร์ไปที่เมนู OAuth2 > Url generator ตรง Scopes ให้เลือกเป็น Bot แล้ว Permission เลือกเป็นสิทธ์ที่เราอยากจะให้บอท แล้ว กด Coppy ได้เลย

## วิธีการใช้
1. TOKEN ไปเอามาจาก [DiscordDevPortal](https://discord.com/developers/applications)
2. เอา TOKEN มาใส่ในไฟล์ .env
3. วิธีเปิดใช้งานบอท
```
 node index.js
```
4. หากพบ Error หรือ มีอะไรผิด ให้ ติดต่อผ่าน Discord `FujaTyping#0148`
