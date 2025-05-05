const qrcode = require('qrcode');



export async function createQrCode(id: string): Promise<string> {
  const url = `https://0195-2804-14d-78a6-8fae-fc84-852-1807-628c.ngrok-free.app/images/${id}`;
  return await qrcode.toDataURL(url, { errorCorrectionLevel: 'H' });
}
