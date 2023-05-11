import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Button, Box } from '@material-ui/core/';

import { paths } from "../config/paths";
import notFound from "../assets/not-found.jpg";
import '../style/NotFoundPage.style.scss';

export const NotFoundPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="container-not-found">
        <img src={notFound} width={250} height={250} alt="Not Found"></img>
        <Link to={paths.form}>
          <Box mt={3}>
            <Button variant="contained" color="secondary">{t`notFound.button`}</Button>
          </Box>
        </Link>
      </div>
    </>
  )
};
