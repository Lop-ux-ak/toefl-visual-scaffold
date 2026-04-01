import { Colors, Spacing, FontSizes, BorderRadius } from '@/constants/theme';
import { StyleSheet, View } from 'react-native';

interface Props {
  progress: number; // 0 to 1
  color?: string;
  height?: number;
}

export default function ProgressBar({ progress, color = Colors.primary, height = 8 }: Props) {
  return (
    <View style={[styles.track, { height }]}>
      <View
        style={[
          styles.fill,
          { width: `${Math.min(100, Math.max(0, progress * 100))}%`, backgroundColor: color, height },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  track: {
    width: '100%',
    backgroundColor: Colors.border,
    borderRadius: BorderRadius.full,
    overflow: 'hidden',
  },
  fill: {
    borderRadius: BorderRadius.full,
  },
});
