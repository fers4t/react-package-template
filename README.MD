# react-package-template

Next.js component for **COMPONENT**

### Installing

```bash
pnpm install fers4t/react-package-template
```

### Usage

```tsx
import React, { useState } from 'react';
import { CloudinaryUpload } from 'react-package-template';

export default function Home() {
   const [callbacks, setCallbacks] = useState();
   return (
      <CloudinaryUpload
         cloudName="YOUR CLOUD NAME"
         uploadPreset="YOUR UPLOAD PRESET"
         onUpload={(a) => setCallbacks(a)}
      />
   );
}
```

You can track all callbacks with `onUpload` prop. I'm storing all of them.

## Styling

```tsx
import React, { useState } from 'react';
import { CloudinaryUpload } from 'react-package-template';

export default function Home() {
   const [callbacks, setCallbacks] = useState();

   return (
      <CloudinaryUpload
         cloudName="YOUR CLOUD NAME"
         uploadPreset="YOUR UPLOAD PRESET"
         onUpload={(a) => setCallbacks(a)}
         buttonClassNames="text-lg font-bold"
         imageWrapperStyles={{ width: '100px', height: '100px' }}
      />
   );
}
```

Custom styles are **overriding defaults completely**. So if you want to use custom styles, you must handle whole style
yourself.

## TO-DO

-  [ ] Add `multiple` prop to prevent/allow multiple uploads.
-  [ ] Add `signed` version ... open issues/PRs for more.

## License

This project is licensed under the MIT License.
