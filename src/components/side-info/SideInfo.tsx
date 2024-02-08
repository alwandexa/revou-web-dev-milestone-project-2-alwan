import React, { FC } from "react";

import { Button } from "antd";
import Title from "antd/lib/typography/Title";
import { useTranslation } from "react-i18next";

const SideInfo: FC = () => {
  const { t } = useTranslation();

  return (
    <div className="side-info">
      <Title level={1} style={{ color: "white" }}>
        <b>DexaDemy</b>
        <br />
        {t("registration")}
      </Title>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec dolor
        sed magna sagittis pharetra. Sed non congue dui. Morbi ut eleifend nunc.
        Mauris dapibus id neque ut luctus. Sed nisi ante, mollis id ullamcorper
        ut, lobortis condimentum tortor. Sed mattis varius purus, ut sodales est
        sodales vel. Proin mollis pharetra mi sed egestas. Etiam pretium mauris
        non rhoncus vestibulum. Vivamus pharetra dolor vel eros lobortis, a
        aliquet sapien ornare. Nam vitae nunc non purus suscipit maximus sed
        rutrum purus.
      </p>
      <p>
        Quisque sed odio rhoncus, pretium est ut, interdum felis. Vestibulum in
        scelerisque erat. Pellentesque maximus massa dolor, faucibus hendrerit
        lectus feugiat quis. Curabitur convallis dui consectetur nisl venenatis
        maximus. Aenean fermentum, velit eu iaculis porta, augue purus mollis
        orci, eget eleifend risus orci ac nisi. Suspendisse tempor at nulla eget
        iaculis. Aenean in orci sit amet elit blandit accumsan eget sed mauris.
        Fusce aliquet leo non nulla euismod, sit amet sagittis purus venenatis.
        Donec rutrum placerat dui, ut accumsan mauris congue sit amet. Nulla
        lobortis tellus ut purus luctus, in consectetur massa consequat.
      </p>
      <Button>{t("why-choose-us")}</Button>
    </div>
  );
};

export default SideInfo;
