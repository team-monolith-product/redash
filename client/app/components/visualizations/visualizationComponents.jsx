import React from "react";
import { pick } from "lodash";
import HelpTrigger from "@/components/HelpTrigger";
import Link from "@/components/Link";
import { Renderer as VisRenderer, Editor as VisEditor, updateVisualizationsSettings } from "@redash/viz/lib";
import { clientConfig } from "@/services/auth";

import countriesDataUrl from "@redash/viz/lib/visualizations/choropleth/maps/countries.geo.json";
import usaDataUrl from "@redash/viz/lib/visualizations/choropleth/maps/usa-albers.geo.json";
import subdivJapanDataUrl from "@redash/viz/lib/visualizations/choropleth/maps/japan.prefectures.geo.json";
import koreaProvincesDataUrl from "@redash/viz/lib/visualizations/choropleth/maps/korea.provinces.geo.json";
import koreaDistrictsDataUrl from "@redash/viz/lib/visualizations/choropleth/maps/korea.districts.geo.json";
import koreaSeoulDataUrl from "@redash/viz/lib/visualizations/choropleth/maps/korea.seoul.geo.json";
import koreaBusanDataUrl from "@redash/viz/lib/visualizations/choropleth/maps/korea.busan.geo.json";
import koreaDaeguDataUrl from "@redash/viz/lib/visualizations/choropleth/maps/korea.daegu.geo.json";
import koreaIncheonDataUrl from "@redash/viz/lib/visualizations/choropleth/maps/korea.incheon.geo.json";
import koreaGwangjuDataUrl from "@redash/viz/lib/visualizations/choropleth/maps/korea.gwangju.geo.json";
import koreaDaejeonDataUrl from "@redash/viz/lib/visualizations/choropleth/maps/korea.daejeon.geo.json";
import koreaUlsanDataUrl from "@redash/viz/lib/visualizations/choropleth/maps/korea.ulsan.geo.json";
import koreaSejongDataUrl from "@redash/viz/lib/visualizations/choropleth/maps/korea.sejong.geo.json";
import koreaGyeonggiDataUrl from "@redash/viz/lib/visualizations/choropleth/maps/korea.gyeonggi.geo.json";
import koreaGangwonDataUrl from "@redash/viz/lib/visualizations/choropleth/maps/korea.gangwon.geo.json";
import koreaChungbukDataUrl from "@redash/viz/lib/visualizations/choropleth/maps/korea.chungbuk.geo.json";
import koreaChungnamDataUrl from "@redash/viz/lib/visualizations/choropleth/maps/korea.chungnam.geo.json";
import koreaJeonbukDataUrl from "@redash/viz/lib/visualizations/choropleth/maps/korea.jeonbuk.geo.json";
import koreaJeonnamDataUrl from "@redash/viz/lib/visualizations/choropleth/maps/korea.jeonnam.geo.json";
import koreaGyeongbukDataUrl from "@redash/viz/lib/visualizations/choropleth/maps/korea.gyeongbuk.geo.json";
import koreaGyeongnamDataUrl from "@redash/viz/lib/visualizations/choropleth/maps/korea.gyeongnam.geo.json";
import koreaJejuDataUrl from "@redash/viz/lib/visualizations/choropleth/maps/korea.jeju.geo.json";

function wrapComponentWithSettings(WrappedComponent) {
  return function VisualizationComponent(props) {
    updateVisualizationsSettings({
      HelpTriggerComponent: HelpTrigger,
      LinkComponent: Link,
      choroplethAvailableMaps: {
        countries: {
          name: "Countries",
          url: countriesDataUrl,
          fieldNames: {
            name: "Short name",
            name_long: "Full name",
            abbrev: "Abbreviated name",
            iso_a2: "ISO code (2 letters)",
            iso_a3: "ISO code (3 letters)",
            iso_n3: "ISO code (3 digits)",
          },
        },
        usa: {
          name: "USA",
          url: usaDataUrl,
          fieldNames: {
            name: "Name",
            ns_code: "National Standard ANSI Code (8-character)",
            geoid: "Geographic ID",
            usps_abbrev: "USPS Abbreviation",
            fips_code: "FIPS Code (2-character)",
          },
        },
        subdiv_japan: {
          name: "Japan/Prefectures",
          url: subdivJapanDataUrl,
          fieldNames: {
            name: "Name",
            name_alt: "Name (alternative)",
            name_local: "Name (local)",
            iso_3166_2: "ISO-3166-2",
            postal: "Postal Code",
            type: "Type",
            type_en: "Type (EN)",
            region: "Region",
            region_code: "Region Code",
          },
        },
        korea_provinces: {
          name: "South Korea/Provinces",
          url: koreaProvincesDataUrl,
          fieldNames: {
            name: "시도명",
            name_eng: "Province (EN)",
            code: "행정구역 코드",
          },
        },
        korea_districts: {
          name: "South Korea/Districts",
          url: koreaDistrictsDataUrl,
          overlayUrl: koreaProvincesDataUrl,
          fieldNames: {
            name: "시군구명",
            name_eng: "District (EN)",
            code: "행정구역 코드",
          },
        },
        korea_seoul: {
          name: "South Korea/Seoul",
          url: koreaSeoulDataUrl,
          fieldNames: { name: "시군구명", name_eng: "District (EN)", code: "행정구역 코드" },
        },
        korea_busan: {
          name: "South Korea/Busan",
          url: koreaBusanDataUrl,
          fieldNames: { name: "시군구명", name_eng: "District (EN)", code: "행정구역 코드" },
        },
        korea_daegu: {
          name: "South Korea/Daegu",
          url: koreaDaeguDataUrl,
          fieldNames: { name: "시군구명", name_eng: "District (EN)", code: "행정구역 코드" },
        },
        korea_incheon: {
          name: "South Korea/Incheon",
          url: koreaIncheonDataUrl,
          fieldNames: { name: "시군구명", name_eng: "District (EN)", code: "행정구역 코드" },
        },
        korea_gwangju: {
          name: "South Korea/Gwangju",
          url: koreaGwangjuDataUrl,
          fieldNames: { name: "시군구명", name_eng: "District (EN)", code: "행정구역 코드" },
        },
        korea_daejeon: {
          name: "South Korea/Daejeon",
          url: koreaDaejeonDataUrl,
          fieldNames: { name: "시군구명", name_eng: "District (EN)", code: "행정구역 코드" },
        },
        korea_ulsan: {
          name: "South Korea/Ulsan",
          url: koreaUlsanDataUrl,
          fieldNames: { name: "시군구명", name_eng: "District (EN)", code: "행정구역 코드" },
        },
        korea_sejong: {
          name: "South Korea/Sejong",
          url: koreaSejongDataUrl,
          fieldNames: { name: "시군구명", name_eng: "District (EN)", code: "행정구역 코드" },
        },
        korea_gyeonggi: {
          name: "South Korea/Gyeonggi",
          url: koreaGyeonggiDataUrl,
          fieldNames: { name: "시군구명", name_eng: "District (EN)", code: "행정구역 코드" },
        },
        korea_gangwon: {
          name: "South Korea/Gangwon",
          url: koreaGangwonDataUrl,
          fieldNames: { name: "시군구명", name_eng: "District (EN)", code: "행정구역 코드" },
        },
        korea_chungbuk: {
          name: "South Korea/Chungbuk",
          url: koreaChungbukDataUrl,
          fieldNames: { name: "시군구명", name_eng: "District (EN)", code: "행정구역 코드" },
        },
        korea_chungnam: {
          name: "South Korea/Chungnam",
          url: koreaChungnamDataUrl,
          fieldNames: { name: "시군구명", name_eng: "District (EN)", code: "행정구역 코드" },
        },
        korea_jeonbuk: {
          name: "South Korea/Jeonbuk",
          url: koreaJeonbukDataUrl,
          fieldNames: { name: "시군구명", name_eng: "District (EN)", code: "행정구역 코드" },
        },
        korea_jeonnam: {
          name: "South Korea/Jeonnam",
          url: koreaJeonnamDataUrl,
          fieldNames: { name: "시군구명", name_eng: "District (EN)", code: "행정구역 코드" },
        },
        korea_gyeongbuk: {
          name: "South Korea/Gyeongbuk",
          url: koreaGyeongbukDataUrl,
          fieldNames: { name: "시군구명", name_eng: "District (EN)", code: "행정구역 코드" },
        },
        korea_gyeongnam: {
          name: "South Korea/Gyeongnam",
          url: koreaGyeongnamDataUrl,
          fieldNames: { name: "시군구명", name_eng: "District (EN)", code: "행정구역 코드" },
        },
        korea_jeju: {
          name: "South Korea/Jeju",
          url: koreaJejuDataUrl,
          fieldNames: { name: "시군구명", name_eng: "District (EN)", code: "행정구역 코드" },
        },
      },
      ...pick(clientConfig, [
        "dateFormat",
        "dateTimeFormat",
        "integerFormat",
        "floatFormat",
        "nullValue",
        "booleanValues",
        "tableCellMaxJSONSize",
        "allowCustomJSVisualizations",
        "hidePlotlyModeBar",
      ]),
    });

    return <WrappedComponent {...props} />;
  };
}

export const Renderer = wrapComponentWithSettings(VisRenderer);
export const Editor = wrapComponentWithSettings(VisEditor);
