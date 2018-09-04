#import <React/UIView+React.h>
#import <React/RCTView.h>

@interface RNImageFilter : RCTView

@property (nonatomic, strong) NSString* name;
@property (nonatomic, strong) NSArray<NSString *> *paramNames;
@property (nonatomic, strong) NSArray<NSString *> *paramTypes;
@property (nonatomic, strong) NSArray<NSString *> *imageNames;
@property (nonatomic, assign) BOOL resizeOutput;

@property (nonatomic, strong) NSString *inputAngle;
@property (nonatomic, strong) NSString *inputNoiseLevel;
@property (nonatomic, strong) NSString *inputSharpness;
@property (nonatomic, strong) NSString *inputSaturation;
@property (nonatomic, strong) NSString *inputBrightness;
@property (nonatomic, strong) NSString *inputContrast;
@property (nonatomic, strong) NSString *inputRefraction;
@property (nonatomic, strong) NSString *inputRotation;
@property (nonatomic, strong) NSString *inputLevels;
@property (nonatomic, strong) NSString *inputIntensity;
@property (nonatomic, strong) NSString *inputPower;
@property (nonatomic, strong) NSString *inputAmount;
@property (nonatomic, strong) NSString *inputRadius;
@property (nonatomic, strong) NSString *inputWidth;
@property (nonatomic, strong) NSString *inputScale;
@property (nonatomic, strong) NSString *inputEV;
@property (nonatomic, strong) NSArray<NSString *> *inputCenter;
@property (nonatomic, strong) NSArray<NSString *> *inputPoint0;
@property (nonatomic, strong) NSArray<NSString *> *inputPoint1;
@property (nonatomic, strong) NSArray<NSNumber *> *inputMinComponents;
@property (nonatomic, strong) NSArray<NSNumber *> *inputMaxComponents;
@property (nonatomic, strong) NSArray<NSNumber *> *inputRVector;
@property (nonatomic, strong) NSArray<NSNumber *> *inputGVector;
@property (nonatomic, strong) NSArray<NSNumber *> *inputBVector;
@property (nonatomic, strong) NSArray<NSNumber *> *inputAVector;
@property (nonatomic, strong) NSArray<NSNumber *> *inputBiasVector;
@property (nonatomic, strong) NSArray<NSNumber *> *inputRedCoefficients;
@property (nonatomic, strong) NSArray<NSNumber *> *inputGreenCoefficients;
@property (nonatomic, strong) NSArray<NSNumber *> *inputBlueCoefficients;
@property (nonatomic, strong) NSArray<NSNumber *> *inputAlphaCoefficients;
@property (nonatomic, strong) NSArray<NSNumber *> *inputNeutral;
@property (nonatomic, strong) NSArray<NSNumber *> *inputTargetNeutral;

+ (CIContext *)createContextWithOptions:(nullable NSDictionary<NSString *, id> *)options;
- (CIContext *)context;

@end
