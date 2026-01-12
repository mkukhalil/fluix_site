module.exports = [
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/pages/api/contact.ts [api] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// pages/api/contact.ts
__turbopack_context__.s([
    "default",
    ()=>handler
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$nodemailer__$5b$external$5d$__$28$nodemailer$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$nodemailer$29$__ = __turbopack_context__.i("[externals]/nodemailer [external] (nodemailer, cjs, [project]/node_modules/nodemailer)");
;
// Create transporter using Gmail (App Password)
const transporter = __TURBOPACK__imported__module__$5b$externals$5d2f$nodemailer__$5b$external$5d$__$28$nodemailer$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$nodemailer$29$__["default"].createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});
async function handler(req, res) {
    if (req.method !== "POST") {
        res.setHeader("Allow", [
            "POST"
        ]); // important for 405 handling
        return res.status(405).json({
            message: `Method ${req.method} Not Allowed`
        });
    }
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
        return res.status(400).json({
            message: "All fields are required"
        });
    }
    try {
        await transporter.sendMail({
            from: `"${name}" <${email}>`,
            to: process.env.EMAIL_USER,
            subject: `New Contact Form Message from ${name}`,
            text: message,
            html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong><br/>${message}</p>`
        });
        return res.status(201).json({
            message: "Message sent successfully!"
        });
    } catch (error) {
        console.error("Email sending error:", error);
        return res.status(500).json({
            message: "Failed to send message"
        });
    }
} //pifs wmod ojvh ftay
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0b2dc76c._.js.map