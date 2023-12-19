import GetIp from "./GetIp";

export default async function SendToDiscord (): Promise<void> {
    const ip = await GetIp();
    const datas={
        "content": ip+" est sur le site !"
    }
    fetch("https://discord.com/api/webhooks/1185718966933541017/vkMC4vYt-GCx6am0mu6rcBRp4obM7MyzibJ558EO5AD83IZjw1xxzhk32sHWxPzDAGJW", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(datas)
    })
}

