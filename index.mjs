import dgram from 'node:dgram';
import { Buffer } from 'node:buffer';
//http://13.52.84.206/Nf89ouR0ofo0dI50vSZ0H
// door bell example

// world: 不帶圖，帶token的
// const message = Buffer.from(`{"ACT":"Push","DID":"FUDEVW-000014-PEVVE","LNS":"CPZASZ","CH":1000,"UTCT":"0x63733225","Sound":"doorbell.wav","Badge":1,"Payload":"eyJESUQiOiJGVURFVlctMDAwMDE0LVBFVlZFIiwiQ0giOjEwMDAsIkRhdGUiOiIyMDIzLTAzLTI0IiwiVGltZSI6IjE1OjQxOjAwIiwiUG9zdENvdW50IjoxLCJUaWNrX21TZWMiOiIxNjY4NDkzODYwMTE0IiwiRmlsZUV4dCI6ImpwZyIsImluZm8iOnsidHMiOiAxNjc5NzM2Njk2LCAiZV9pZCI6MTkwMDAsIm5vdGlmeV90b2tlbiI6IkZIQnZLTWF5d0VxSFlDYWVlSE4ifX0=","TRID":"Pq4tjEWh4iTHqvhCa6FS","AIP":"13.215.109.239:32160","APNSInfo":{"title_loc_key":"notification_title","loc_key":"notification_push_live","title_loc_args":"[\\"arpha plus\\"]","loc_args":"[\\"EVENT_INVOKE_REMOTE\\"]"},"SPS":{"DLInfo":"IP13.214.59.242Port32003","LDLInfo":"IP172.31.29.71Port32003","FileName":"gGbEEU80Pfp0L-S0vwZ0X","FileSize":10721},"Title":"arpha plus","Body":"EVENT_INVOKE_REMOTE","AG_Type":"APNS","AppName":"arpha_plus_dev","AppToken":"d37ae0b2154db225628d9949adecce1126e2a4d31384d784b2610a19cff9f132"}`);

// china: 不帶圖，帶token的
const message = Buffer.from(`{"ACT":"Push","DID":"FUCNAW-000033-YBEJS","LNS":"NHIYLI","CH":1000,"UTCT":"0x64215D35","Sound":"doorbell.wav","Badge":1,"Payload":"eyJESUQiOiJGVUNOQVctMDAwMDMzLVlCRUpTIiwiQ0giOjEwMDAsIkRhdGUiOiIyMDIzLTAzLTI3IiwiVGltZSI6IjE4OjA5OjA5IiwiUG9zdENvdW50IjoxLCJUaWNrX21TZWMiOiIxNjc5OTExNzQ5MDQ0IiwiRmlsZUV4dCI6ImpwZyIsImluZm8iOnsidHMiOjE2Nzk5MDk4MzQsICJlX2lkIjoxOTAwMCwgInBob3RvX2RpcmVjdGlvbiI6OTAsICJub3RpZnlfdG9rZW4iOiAiS1Nsa3NvcEtEOEUifX0=","TRID":"w7czOX3~ntsx9i~QsnEJ","AIP":"124.70.218.19:32160","APNSInfo":{"title_loc_key":"notification_title","loc_key":"notification_push_live","title_loc_args":"[\\"arpha plus\\"]","loc_args":"[\\"EVENT_INVOKE_REMOTE\\"]"},"SPS":{"DLInfo":"IP110.41.14.38Port32003","LDLInfo":"IP192.168.0.238Port32003","FileName":"7VrX3Sq0AZL0eu80ifa0r","FileSize":14637},"Title":"arpha plus","Body":"EVENT_INVOKE_REMOTE","AG_Type":"DPS","AppName":"arpha_plus","AppToken":"641EA83800004B5D19421D5F8EB57792"}`);

// watcher example
// const message = Buffer.from(`{"ACT":"Push","DID":"FUDEVS-000009-KLRLX","LNS":"JJKUZF","CH":10000,"UTCT":"0x63156B58","Sound":"doorbell.wav","Badge":1,"Payload":"eyJEYXRlIjoiMjAyMi0wOS0wNSIsIlRpbWUiOiIwMzoyMjowMCIsIlBvc3RDb3VudCI6MTAxNTg5LCJUaWNrX21TZWMiOiIxNjYyMzQ4MTIwMDA1IiwiRmlsZUV4dCI6ImpwZyJ9","TRID":"cU3ta6jWGhTbKaWySKXa","AIP":"13.215.109.239:32160","APNSInfo":{"title_loc_key":"notification_title","loc_key":"notification_push_live","title_loc_args":"[\\"Hi,FUDEVS-000009-KLRLX [DNAME]\\"]","loc_args":"[\\"2022-09-05 03:22:00 发现有[BN]个人出现\\"]"},"SPS":{"DLInfo":"IP13.52.84.206Port32003","LDLInfo":"IP172.31.25.35Port32003","FileName":"8JO9UCj0PfM02I50PSZ01","FileSize":32282},"Subtitle":"苹果副标题","Title":"Hi,FUDEVS-000009-KLRLX [DNAME]","Body":"2022-09-05 03:22:00 发现有[BN]个人出现","AG_Type":"DPS","AppName":"WiPN_Client_DPS","AppToken":"62CFC1A0000C4C0106140B937FC44460"}`);


const client = dgram.createSocket('udp4');
client.send(message, 30001, 'localhost', (err) => {
    client.close();
});