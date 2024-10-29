# مولد كود HTML

## نظرة عامة

مولد كود HTML هو تطبيق ويب يتيح للمستخدمين إنشاء مقاطع كود HTML بسهولة عن طريق اختيار عنصر HTML، إضافة السمات، وتحديد المحتوى. هذه الأداة مثالية للمبتدئين في تعلم HTML أو للمطورين الذين يرغبون في طريقة سريعة لإنشاء مقاطع الكود.

## رحلة المستخدم

1. **الوصول إلى التطبيق**

   - يتنقل المستخدم إلى تطبيق مولد كود HTML في متصفح الويب الخاص به.

2. **اختيار عنصر HTML**

   - يتم عرض قائمة منسدلة تحتوي على قائمة بعناصر HTML الشائعة (مثل `div`، `p`، `h1`، `a`، `img`، إلخ).
   - يختار المستخدم عنصر HTML المطلوب من القائمة المنسدلة.

3. **إضافة السمات**

   - أسفل القائمة المنسدلة، يوجد حقل إدخال بعنوان "السمات".
   - يمكن للمستخدم إدخال أي سمات يرغب في إضافتها إلى عنصر HTML المحدد (مثل `class="my-class"` أو `id="my-id"`).
   - يجب إدخال السمات بالصيغة الصحيحة.

4. **إدخال المحتوى (إذا كان ذلك مناسبًا)**

   - بالنسبة للعناصر التي يمكن أن تحتوي على محتوى (مثل `div`، `p`، `h1`)، يتم عرض منطقة نص بعنوان "المحتوى".
   - يمكن للمستخدم إدخال المحتوى الذي سيظهر داخل عنصر HTML.
   - بالنسبة للعناصر ذاتية الإغلاق (مثل `img`، `input`)، يتم إخفاء حقل المحتوى لأنه غير مناسب.

5. **توليد كود HTML**

   - ينقر المستخدم على زر "توليد كود HTML".
   - يقوم التطبيق بتوليد كود HTML بناءً على اختيارات وإدخالات المستخدم.
   - يتم عرض الكود المتولد أسفل الزر في كتلة كود منسقة.

6. **نسخ الكود**

   - أسفل الكود المتولد، يوجد زر "نسخ إلى الحافظة".
   - يمكن للمستخدم النقر على هذا الزر لنسخ كود HTML المتولد إلى الحافظة الخاصة به.
   - يتم عرض رسالة نجاح "تم نسخ الكود إلى الحافظة!" عند النسخ بنجاح.

## الميزات الإضافية

- **تصميم متجاوب**

  - التطبيق متجاوب ويعمل بشكل جيد على مختلف أحجام الشاشات، بما في ذلك الأجهزة المحمولة والشاشات الكبيرة.

- **واجهة سهلة الاستخدام**

  - تم تسمية المدخلات بوضوح، والواجهة بديهية.
  - الأزرار تحتوي على تأثيرات عند التحويم ومصممة لسهولة الاستخدام.

- **معالجة الأخطاء**

  - يضمن التطبيق أن المدخلات تتم معالجتها بشكل صحيح.
  - حالات التحميل تتم معالجتها بسلاسة (على الرغم من أن التطبيق لا يقوم بأي طلبات API في هذا الإصدار).

## التقنيات المستخدمة

- **SolidJS**

  - مكتبة JavaScript تعبيرية لإنشاء واجهات المستخدم.

- **Tailwind CSS**

  - إطار عمل CSS يركز على الأدوات المستخدمة في تصميم التطبيق.

- **Vite**

  - أداة بناء سريعة تستخدم لتجميع وتطوير التطبيق.

## البدء

لتشغيل التطبيق محليًا:

1. **تثبيت التبعيات**

   ```bash
   npm install
   ```

2. **تشغيل خادم التطوير**

   ```bash
   npm run dev
   ```

3. **البناء للإنتاج**

   ```bash
   npm run build
   ```

4. **معاينة بناء الإنتاج**

   ```bash
   npm run serve
   ```

## المساهمة

المساهمات مرحب بها! يرجى عمل fork للمستودع وتقديم طلب سحب.

## الترخيص

هذا المشروع مرخص بموجب ترخيص MIT.