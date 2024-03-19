// Importação dos componentes necessários do React e do Material UI para o drawer (gaveta) e a barra de aplicativo.
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
// Importação do componente Link para navegação entre páginas.
import { Link } from "react-router-dom";
import { Container } from "@mui/material";

// Definição da largura do drawer quando aberto.
const drawerWidth = 240;
// Criação de um componente para o título do aplicativo.
const TituloApp = () => <Typography>App Api</Typography>;
// Itens de navegação e caminhos para o roteamento.
const navItems = [
  { name: "Inicial", path: "/" },
  { name: "Produtos", path: "/produtos" },
  { name: "Contato", path: "/contato" },
];

// Componente principal para o drawer e a barra de aplicativo.
function DrawerAppBar(props) {
  const { window } = props;
  // Estado para gerenciar a abertura/fechamento do drawer móvel.
  const [mobileOpen, setMobileOpen] = React.useState(false);

  // Manipulador para alternar o estado de abertura/fechamento do drawer móvel.
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  // Define o conteúdo do drawer.
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Container>
        <Typography variant="h6" sx={{ my: 2 }}>
          <TituloApp />
        </Typography>
        <Divider />
        <List>
          {navItems.map((item) => (
            <ListItem key={item.name} disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <Link to={item.path}>
                  <ListItemText primary={item.name} />
                </Link>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Container>
    </Box>
  );

  // Determina o contêiner para o drawer móvel (usado para melhorar a acessibilidade e desempenho no mobile).
  const container =
    window !== undefined ? () => window().document.body : undefined;

  // Estrutura do componente com AppBar, Drawer e o conteúdo principal.
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Abrir menu"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <TituloApp />
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Link to={item.path} key={item.name}>
                <Button sx={{ color: "#fff" }}>{item.name}</Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Melhora o desempenho de abertura no mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}
// Exportação da função Header que retorna o DrawerAppBar.
export default function Header() {
  return <DrawerAppBar />;
}
