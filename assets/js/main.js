function DateTime(){
    const now = new Date();
    const element = document.getElementById("time").innerText = now.toLocaleString();
}
setInterval(DateTime, 1000)

// function updateDateTime() {
//     const now = new Date(); // ১. "now Date()" এর বদলে "new Date()" হবে
//     // ২. "tolocalestring()" এর জায়গায় উটের পিঠের মতো CamelCase-এ "toLocaleString()" হবে
//     document.getElementById("time").innerText = now.toLocaleString(); 
// }

// // প্রতি ১ সেকেন্ড (১০০০ মিলিসেকেন্ড) পরপর ফাংশনটি রান হবে
// setInterval(updateDateTime, 1000);