// Vercel serverless endpoint: configure RESEND_API_KEY + CONTACT_FROM_EMAIL.
export default async function handler(req,res){
 if(req.method!=='POST') return res.status(405).json({error:'Method not allowed'});
 const {name,email,service,message,website}=req.body||{};
 if(website) return res.status(200).json({ok:true}); // honeypot
 if(!name||!email||!message||name.length>120||message.length>4000||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return res.status(400).json({error:'Please provide a valid name, email and message.'});
 if(!process.env.RESEND_API_KEY||!process.env.CONTACT_FROM_EMAIL) return res.status(503).json({error:'Email delivery has not been configured by the site owner.'});
 const safe=s=>String(s||'').replace(/[<>&"']/g,c=>({'<':'&lt;','>':'&gt;','&':'&amp;','"':'&quot;',"'":'&#39;'}[c]));
 try{
  const response=await fetch('https://api.resend.com/emails',{method:'POST',headers:{Authorization:`Bearer ${process.env.RESEND_API_KEY}`,'Content-Type':'application/json'},body:JSON.stringify({from:process.env.CONTACT_FROM_EMAIL,to:['aneebdesignerlhr@gmail.com'],reply_to:email,subject:`Portfolio enquiry from ${name.slice(0,80)}`,html:`<h2>New portfolio enquiry</h2><p><strong>Name:</strong> ${safe(name)}</p><p><strong>Email:</strong> ${safe(email)}</p><p><strong>Service:</strong> ${safe(service)}</p><p><strong>Message:</strong></p><p>${safe(message).replace(/\n/g,'<br>')}</p>`})});
  if(!response.ok) return res.status(502).json({error:'Email service could not deliver the message.'});
  return res.status(200).json({ok:true});
 }catch{return res.status(502).json({error:'Failed to connect to email service.'});}
}
