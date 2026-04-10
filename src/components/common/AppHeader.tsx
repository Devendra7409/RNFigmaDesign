import React from 'react';
import { Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors, Radius, Spacing, Typography } from '../../constants/theme';

export interface AppHeaderProps {
  variant?: 'profile' | 'title';
  greeting?: string;
  userName?: string;
  handle?: string;
  avatar?: ImageSourcePropType;
  title?: string;
  onPressNotification?: () => void;
  onPressBack?: () => void;
  notificationCount?: number;
  showNotification?: boolean;
  showBack?: boolean;
}

const AppHeader: React.FC<AppHeaderProps> = ({
  variant = 'profile',
  greeting = 'Hi,',
  userName = 'User',
  handle,
  avatar,
  title,
  onPressNotification,
  onPressBack,
  notificationCount = 0,
  showNotification = true,
  showBack = false,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        {variant === 'profile' ? (
          <>
            <View style={styles.avatarWrap}>
              {avatar ? (
                <Image source={avatar} style={styles.avatar} />
              ) : (
                <View style={[styles.avatar, styles.avatarFallback]}>
                  <Text style={styles.avatarInitial}>{userName.charAt(0)}</Text>
                </View>
              )}
            </View>
            <View style={styles.textBlock}>
              <Text style={styles.userName} numberOfLines={1}>
                {greeting} {userName}
              </Text>
              {!!handle && (
                <Text style={styles.handle} numberOfLines={1}>
                  {handle}
                </Text>
              )}
            </View>
          </>
        ) : (
          <View style={styles.titleRow}>
            {showBack && (
              <TouchableOpacity onPress={onPressBack} style={styles.backBtn} activeOpacity={0.7}>
                <Text style={styles.backIcon}>‹</Text>
              </TouchableOpacity>
            )}
            <Text style={styles.title} numberOfLines={1}>
              {title}
            </Text>
          </View>
        )}
      </View>

      {showNotification && (
        <TouchableOpacity
          style={styles.iconBtn}
          activeOpacity={0.8}
          onPress={onPressNotification}
        >
          <Text style={styles.bellIcon}>🔔</Text>
          {notificationCount > 0 && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{notificationCount}</Text>
            </View>
          )}
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.xl,
    paddingTop: Spacing.md,
    paddingBottom: Spacing.lg,
  },
  left: { flexDirection: 'row', alignItems: 'center', flex: 1 },
  avatarWrap: {
    width: 44,
    height: 44,
    borderRadius: Radius.pill,
    borderWidth: 1.5,
    borderColor: Colors.gold,
    padding: 2,
  },
  avatar: { width: '100%', height: '100%', borderRadius: Radius.pill },
  avatarFallback: {
    backgroundColor: Colors.surfaceAlt,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarInitial: { ...Typography.headingMedium, color: Colors.gold },
  textBlock: { marginLeft: Spacing.md, flex: 1 },
  greeting: { ...Typography.captionSmall, color: Colors.textMuted },
  userName: { ...Typography.headingMedium, color: Colors.textPrimary },
  handle: { ...Typography.captionSmall, color: Colors.textMuted, marginTop: 2 },
  titleRow: { flexDirection: 'row', alignItems: 'center' },
  backBtn: {
    width: 36,
    height: 36,
    borderRadius: Radius.md,
    backgroundColor: Colors.surfaceAlt,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: Spacing.md,
  },
  backIcon: { color: Colors.textPrimary, fontSize: 24, marginTop: -3 },
  title: { ...Typography.headingLarge, color: Colors.textPrimary },
  iconBtn: {
    width: 42,
    height: 42,
    borderRadius: Radius.md,
    backgroundColor: Colors.surfaceAlt,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bellIcon: { fontSize: 18 },
  badge: {
    position: 'absolute',
    top: 6,
    right: 6,
    minWidth: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: Colors.gold,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 3,
  },
  badgeText: { fontSize: 9, fontWeight: '700', color: Colors.black },
});

export default AppHeader;
