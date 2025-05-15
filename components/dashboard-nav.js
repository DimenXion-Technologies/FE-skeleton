"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { ArrowRight } from "@mui/icons-material";
import { useTranslation } from "./language-provider";

export function DashboardNav({ items, setOpen }) {
  const path = usePathname();
  const { t } = useTranslation();

  if (!items?.length) return null;

  return (
    <List disablePadding>
      {items.map((item, index) => {
        const Icon = item.icon || ArrowRight;
        const isActive = path === item.href;

        return (
          <Link
            key={index}
            href={item.disabled ? "/" : item.href}
            passHref
            style={{ textDecoration: "none" }}
            onClick={() => {
              if (setOpen) setOpen(false);
            }}
          >
            <ListItemButton
              selected={isActive}
              disabled={item.disabled}
              sx={{
                borderRadius: 2,
                px: 1,
                py: 0.5,
                my: 0.5,
                color: "text.primary",
                "&.Mui-selected": {
                  backgroundColor: "primary.main",
                  color: "primary.contrastText",
                  "&:hover": {
                    backgroundColor: "primary.dark",
                  },
                },
                "&:hover": {
                  backgroundColor: "action.hover",
                },
                opacity: item.disabled ? 0.6 : 1,
              }}
            >
              <ListItemIcon sx={{ minWidth: 36, color: "inherit" }}>
                <Icon style={{ fontSize: 24 }} />
              </ListItemIcon>
              <ListItemText
                primary={t(item.title)}
                primaryTypographyProps={{ fontSize: 16, fontWeight: 500 }}
              />
            </ListItemButton>
          </Link>
        );
      })}
    </List>
  );
}
