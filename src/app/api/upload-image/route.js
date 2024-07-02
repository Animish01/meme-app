// import { NextApiRequest, NextApiResponse } from "next";
// import { NextResponse } from "next/server";
import {default as nextConnect} from "next-connect";
import { uploadMiddleware } from "../../../../middleware/multer";

const apiRoute = nextConnect({
  onError(error, req, res) {
    res.status(501).json({ error: `Sorry something happened! ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
})

apiRoute.use(uploadMiddleware);

apiRoute.post((req, res) => {
  console.log('on server');
  try {
    res.status(200).json({message: "uploaded"});
  } catch(e) {
    res.status(500).json({error: "couldn't upload img"});
  } 
})

// export async function POST (req:any, res:any) {
//   console.log('on server');

//   try {
//     // console.log(req);
//     console.log('server file', req.file);
//     // console.log(req.file);
    
//     return NextResponse.json({message: req.file});
//   } catch (e) {
//     return NextResponse.json({error: 'error on server'});
//   }
// }

export default apiRoute;

export const config = {
  api: {
    bodyParser: false,
  },
};