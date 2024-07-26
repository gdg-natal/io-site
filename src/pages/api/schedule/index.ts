// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import { getCalendar } from "@/services/google-calendar";

type Data = {
  name: string;
};

const images: { [key: string]: string } = {
  'Mateus de Assis': 'https://res.cloudinary.com/dghznmzpy/image/upload/v1721069947/small_assis_Mateus_de_Assis_Silva_5545e779ff.png',
  'Allan Kardec': 'https://res.cloudinary.com/dghznmzpy/image/upload/v1721079786/small_1_E9_AD_9_FA_E594_41_FD_BED_8_FCA_9_E196707_F_1_201_a_Allan_Kardec_Bass_528a89af8f.jpg',
  'Vimerson Dantas': 'https://res.cloudinary.com/dghznmzpy/image/upload/v1721078360/small_Screenshot_2024_07_15_at_18_19_00_462ebf544f.png',
  'Erick Machado': 'https://res.cloudinary.com/dghznmzpy/image/upload/v1721076297/small_Perfil_Erick_Willy_fc6703d7ba.jpg',
  'Yuri Sales': 'https://res.cloudinary.com/dghznmzpy/image/upload/v1721076164/small_Screenshot_2024_07_15_at_17_42_20_0a7badbb9d.png',
  'William Grasel': 'https://res.cloudinary.com/dghznmzpy/image/upload/v1718577496/small_PXL_20220426_224408195_1_9724c18637.png',
  'Carla Vieira': 'https://res.cloudinary.com/dghznmzpy/image/upload/v1718675201/small_Screenshot_2024_01_10_at_15_36_24_Carla_Vieira_0d3a8b88f1.png',
  'Camilla Martins': 'https://res.cloudinary.com/dghznmzpy/image/upload/v1718675316/small_Captura_de_Tela_2024_05_20_as_15_25_47_Camilla_Martins_punkdodevops_1_17bc497b52.png',
  'Fausto Blanco': 'https://res.cloudinary.com/dghznmzpy/image/upload/v1718675354/small_Whats_App_Image_2024_05_09_at_10_32_30_Fausto_Blanco_1_c32ee03861.jpg',
  'Marcel Ribeiro Dantas': 'https://res.cloudinary.com/dghznmzpy/image/upload/v1721076459/small_1698118256953_7_Marcel_Ribeiro_Dantas_e8ccbbf209.jpg',
  'Anderson Cirilo Valentim': 'https://res.cloudinary.com/dghznmzpy/image/upload/v1718675457/small_5d44ef47_b617_496f_ba97_86da2cc4a76c_Anderson_Cirilo_Valentim_1_8e3fe64c78.jpg',
  'Wellington Santos Silva': 'https://res.cloudinary.com/dghznmzpy/image/upload/v1721076546/small_Wellington_151_Wellington_Santos_Silva_36c5f5c1e4.jpg',
  'Allythy Renan': 'https://res.cloudinary.com/dghznmzpy/image/upload/v1721076605/small_1717177303646_allythy_5fea0b3cbf.jpg',
  'Ana Raquel Fernandes': 'https://res.cloudinary.com/dghznmzpy/image/upload/v1721079651/small_me_Ana_Raquel_Fernandes_Cunha_f5b12c6f27.jpg',
  'Antony Lemos': 'https://res.cloudinary.com/dghznmzpy/image/upload/v1721079720/small_IMG_7864_Antony_Lemos_6b15a7f7b7.jpg',
  'Women Techmakers': ''
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const calendar = await getCalendar()

  const sortSpeakerData = (data: { genipabu: any[]; morro: any[]; cajueiro: any[]; } | { [x: string]: any; }) => {
    let sortedData: { [key: string]: any } = {}

    Object.keys(data).forEach((stage) => {
      sortedData[stage] =
        data[stage]
          .sort((a: any, b: any) =>
            new Date(a.start).getTime() < new Date(b.start).getTime() ? -1 : 1
          )
    })

    return sortedData
  }

  const formatSpeakerData = (calendar: { items: { description: any; start: any; end: any; location: any; id: any; summary: any; }[]; }) => {
    const formattedData = calendar?.items?.map(({ description: infos, start, end, location, id, summary }) => {
      const [title, type, description, _, about, role] = infos?.split(' | ') ?? ''

      return {
        id,
        start: start.dateTime,
        end: end.dateTime,
        speaker: summary,
        stage: location,
        title,
        type,
        description,
        about,
        role,
        image: images[summary]
      }
    })

    return formattedData
  }

  const groupedByStage = formatSpeakerData(calendar)?.reduce((acc: { [x: string]: any; }, curr: { stage: string; }) => {
    const stageName = curr?.stage?.split(' ')?.[1].toLowerCase()

    if (!stageName) {
      return { ...acc, genipabu: [...acc['genipabu'], curr], morro: [...acc['morro'], curr], cajueiro: [...acc['cajueiro'], curr] }
    }

    return { ...acc, [stageName]: [...acc[stageName], curr] }
  }, { genipabu: [], morro: [], cajueiro: [] })

  const data = sortSpeakerData(groupedByStage)

  res.status(200).json({ data, status: 200 });
}
