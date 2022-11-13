import { styled } from "@mui/system";
import {Link as RouterLink} from 'react-router-dom'
type Props = {
  title: string;
  href: string;
};

export const Link: React.FC<Props> = ({ title, href }) => {
  return <StyledLink to={href}>{title}</StyledLink>;
};


const StyledLink = styled(RouterLink)(({ theme }) => ({
    color: theme.palette.primary.contrastText,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: theme.shape.borderRadius,
    textDecoration: 'none',
    fontFamily: 'Roboto',
  }));
