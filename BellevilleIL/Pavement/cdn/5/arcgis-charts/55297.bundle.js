"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[55297],{55297:(e,t,a)=>{a.r(t),a.d(t,{additionalProperty:()=>P,anyOfValues:()=>x,bubbleChartValidateMsg:()=>S,default:()=>q,defaultError:()=>i,defaultInvalidChart:()=>s,duplicateSeriesID:()=>u,enumValues:()=>g,histogramEmptyField:()=>E,invalidSeriesType:()=>v,layerLoadFailure:()=>m,lineChartMarkersCannotExceedLimit:()=>k,lineChartSeriesAndMarkersCannotExceedLimit:()=>b,maxItems:()=>L,minItems:()=>c,minLength:()=>h,negativeValueInDataForLogTransformation:()=>l,negativeValueInDataForSqrtTransformation:()=>d,nonNumericAggregation:()=>$,or:()=>I,pieChartCannotHaveMixtureOfPositiveAndNegativeSlices:()=>f,pieChartSlicesCannotExceedLimit:()=>V,queryError:()=>y,requiredProperty:()=>C,threePlusSeriesBarCountCannotExceedLimit:()=>o,twoSeriesBarCountCannotExceedLimit:()=>n,uniqueSeriesBarCountCannotExceedLimit:()=>r,whiteSpacePattern:()=>p});const i="אירעה שגיאה במהלך טעינת התרשים.",r='קיימות בסה"כ ${ elementCount } עמודות בתרשים זה. תרשימי עמודות עם סדרה אחת מוגבלים ל-${ totalLimit } עמודות. בחר שדה קטגוריה עם פחות ערכים ייחודיים או החל מסנן על הנתונים שלך.',n="תרשימי עמודות עם שתי סדרות מוגבלים ל-${ totalLimit } עמודות, או ל-${ seriesLimit } עמודות בכל סדרה. בחר שדה קטגוריה עם פחות ערכים ייחודיים או החל מסנן על הנתונים שלך.",o="תרשימי עמודות עם שלוש סדרות או יותר מוגבלים ל-${ totalLimit } עמודות, או ל-${ seriesLimit } עמודות לכל סדרה. בחר שדה קטגוריה עם פחות ערכים ייחודיים או החל מסנן על הנתונים שלך.",s="אירעה שגיאה ביצירת התרשים.",l="לא ניתן לבצע טרנספורמציה לוגריתמית על ערכים שליליים או על אפס.",d="לא ניתן לבצע טרנספורמציה של שורש ריבועי על ערכים שליליים.",m="אירעה שגיאה במהלך טעינת השכבה. URL = ${ url }. מזהה פריט פורטל =${ portalItemId }.",u="${ dataPath } חייב/ת להיות ייחודי/ת. לסדרה בשם ${ seriesName } יש מזהה (${ seriesID }) שבו משתמשת כבר סדרה אחרת.",$="ל-${ dataPath } אסור לבצע צבירה שאינה ספירה על שדה לא מספרי.",C="ב-${ dataPath } חסר מאפיין בשם ${ missingProperty }.",h="${ dataPath } לא יכול להיות קצר יות מ-${ limit } תווים.",c="ל-${ dataPath } לא יכולים להיות פחות מ-${ limit } פריטים.",L="ל-${ dataPath } לא יכולים להיות יותר מ-${ limit } פריטים.",p="ל-${ dataPath } חייב להיות לפחות תו אחד שאינו רווח בלתי נראה.",P="ל-${ dataPath } אסור לכלול ${ additionalProperty }.",g="${ dataPath } חייב להיות שווה לאחד מהערכים המותרים הבאים: ${ allowedValues }.",x="${ dataPath } חייב להתאים לסכמה של אחד מאלה: ${ schemaOptions }.",S="תרשים פיזור עם סמלים פרופורציונליים לא נתמך. הוחל גודל סמל שמוגדר כברירת מחדל.",y="קריאת נתוני הקלט נכשלה.",E="היסטוגרמות חייבות לכלול לפחות שני ערכים מספריים.",v="סוג הסדרה הצפוי במדד ${ seriesIndex } הוא '${ expectedType }', אבל במקום זאת התקבל '${ receivedType }'.",I="או",f="הבטח שהסכום הכולל של השדה/ות המספריים שנבחרו יחזירו רק ערכים חיוביים או רק נתונים שליליים.",V='קיימות בסה"כ ${ sliceCount } פרוסות בתרשים זה. תרשימי עוגה מוגבלים ל-${ totalLimit } פלחים. בחר שדה קטגוריה עם פחות ערכים ייחודיים, הוסף פחות שדות מספריים או החל מסנן על הנתונים שלך.',b="תרשים זה כולל ${ seriesCount } סדרות ו-${ elementCount } נקודות נתונים. תרשימי קווים מוגבלים ל-${ seriesLimit } סדרות ו-${ totalLimit } נקודות נתונים. הקטן את מספר הסדרות ו/או צבור מחדש או סנן את הנתונים שלך.",k="תרשימי קווים מוגבלים ל-${ totalLimit } נקודות נתונים. סנן או צבור מחדש את הנתונים שלך ונסה שוב.";var q={defaultError:"אירעה שגיאה במהלך טעינת התרשים.",uniqueSeriesBarCountCannotExceedLimit:r,twoSeriesBarCountCannotExceedLimit:n,threePlusSeriesBarCountCannotExceedLimit:o,defaultInvalidChart:"אירעה שגיאה ביצירת התרשים.",negativeValueInDataForLogTransformation:"לא ניתן לבצע טרנספורמציה לוגריתמית על ערכים שליליים או על אפס.",negativeValueInDataForSqrtTransformation:"לא ניתן לבצע טרנספורמציה של שורש ריבועי על ערכים שליליים.",layerLoadFailure:m,duplicateSeriesID:u,nonNumericAggregation:"ל-${ dataPath } אסור לבצע צבירה שאינה ספירה על שדה לא מספרי.",requiredProperty:C,minLength:h,minItems:c,maxItems:L,whiteSpacePattern:p,additionalProperty:"ל-${ dataPath } אסור לכלול ${ additionalProperty }.",enumValues:g,anyOfValues:x,bubbleChartValidateMsg:S,queryError:"קריאת נתוני הקלט נכשלה.",histogramEmptyField:"היסטוגרמות חייבות לכלול לפחות שני ערכים מספריים.",invalidSeriesType:v,or:"או",pieChartCannotHaveMixtureOfPositiveAndNegativeSlices:"הבטח שהסכום הכולל של השדה/ות המספריים שנבחרו יחזירו רק ערכים חיוביים או רק נתונים שליליים.",pieChartSlicesCannotExceedLimit:V,lineChartSeriesAndMarkersCannotExceedLimit:b,lineChartMarkersCannotExceedLimit:"תרשימי קווים מוגבלים ל-${ totalLimit } נקודות נתונים. סנן או צבור מחדש את הנתונים שלך ונסה שוב."}}}]);